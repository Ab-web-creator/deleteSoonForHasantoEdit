import React, { useState } from 'react';
import './converterForQisas.css';

const ConverterForQisas = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const processInlineMarkers = (text) => {
    const parts = text.split(/(\\[a-zA-Z*]+)/);
    let result = '';
    let inItalic = false;
    let inBoldItalic = false;

    parts.forEach((part) => {
      if (part === '\\it') {
        inItalic = true;
      } else if (inItalic && part === '\\it*') {
        inItalic = false;
      } else if (part === '\\bdit') {
        inBoldItalic = true;
      } else if (inBoldItalic && part === '\\bdit*') {
        inBoldItalic = false;
      } else if (inItalic && part.match(/\\[a-zA-Z*]+/)) {
        inItalic = false;
        result += part;
      } else if (inBoldItalic && part.match(/\\[a-zA-Z*]+/)) {
        inBoldItalic = false;
        result += part;
      } else if (inItalic) {
        result += `<span className='vitalic'>${part}</span>`;
      } else if (inBoldItalic) {
        result += `<span className='boldItalic'>${part}</span>`;
      } else {
        result += part;
      }
    });

    return result;
  };

  const handleConvertClick = () => {
    const lines = inputText.split('\n');
    const convertedLines = [];
    let paragraphContent = '';
    let headingContent = '';
    let inParagraph = false;
    let inHeading = false;
    let footnoteCount = 0;
    let currentFootnotes = [];
    let skipUntilNextMarker = false;

    const paragraphMarkers = ['\\p', '\\s', '\\mt', '\\mte', '\\q', '\\q1', '\\q2', '\\c'];

    lines.forEach((line) => {
      let cleanedLine = line
        .replace(/\\zor\*/g, '')  // Remove \zor*
        .replace(/\\zgr\*/g, '')  // Remove \zgr*
        .replace(/\\w\*/g, '')    // Remove \w*
        .replace(/\\zbl\*/g, '')  // Remove \zbl*
        .replace(/\\zpu\*/g, '')  // Remove \zpu*  
        .replace(/\\zbr\*/g, '')  // Remove \zbr*  

        .replace(/\\zgr/g, '') // Remove \zgr
        .replace(/\\w/g, '')   // Remove \w
        .replace(/\\zor/g, '') // Remove \zor
        .replace(/\\zbl/g, '') // Remove \zbl
        .replace(/\\zpu/g, '') // Remove \zpu
        .replace(/\\zbr/g, '') // Remove \zbr
      
        .replace(/\\c\s+\d+/g, '') // Remove chapter markers
        .replace(/\\va\s*[^]*?\s*\\va\*/g, '') // Remove \va ... \va* with any text between
        .replace(/\\va\s*\d*/g, '') // Remove standalone \va with optional number
        .replace(/\\v\s+[^\s]+\s*/g, '') // Remove verse numbers
        .trim();

      if (!cleanedLine) {
        if (inParagraph) paragraphContent += ' ';
        else if (inHeading) headingContent += ' ';
        return;
      }

      // Check if line starts with \rem
      if (cleanedLine.startsWith('\\rem')) {
        skipUntilNextMarker = true;
        return;
      }

      // If we're skipping, check for next paragraph marker
      if (skipUntilNextMarker) {
        if (paragraphMarkers.some(marker => cleanedLine.startsWith(marker))) {
          skipUntilNextMarker = false;
        } else {
          return; // Continue skipping until we hit a paragraph marker
        }
      }

      const footnoteRegex = /\\f \+ \\ft([^]*?)\\f\*/g;
      let match;
      while ((match = footnoteRegex.exec(cleanedLine)) !== null) {
        footnoteCount++;
        const footnoteText = match[1].trim();
        currentFootnotes.push({ number: footnoteCount, text: footnoteText });
        cleanedLine = cleanedLine.replace(match[0], `<sup>${footnoteCount}</sup>`);
      }

      const startsWithMarker = paragraphMarkers.some(marker => cleanedLine.startsWith(marker));

      if ((inParagraph || inHeading) && startsWithMarker) {
        if (inParagraph && paragraphContent.trim()) {
          convertedLines.push({ type: 'paragraph', content: paragraphContent.trim(), footnotes: [...currentFootnotes] });
          paragraphContent = '';
          currentFootnotes = [];
          inParagraph = false;
        } else if (inHeading && headingContent.trim()) {
          convertedLines.push({ type: 'heading', content: headingContent.trim() });
          headingContent = '';
          inHeading = false;
        }
      }

      if (cleanedLine.startsWith('\\mte')) {
        const content = cleanedLine.replace('\\mte', '').trim();
        convertedLines.push({ type: 'title', content });
      } else if (cleanedLine.startsWith('\\s')) {
        if (inParagraph && paragraphContent.trim()) {
          convertedLines.push({ type: 'paragraph', content: paragraphContent.trim(), footnotes: [...currentFootnotes] });
          paragraphContent = '';
          currentFootnotes = [];
          inParagraph = false;
        }
        headingContent = cleanedLine.replace('\\s', '').trim();
        inHeading = true;
      } else if (cleanedLine.startsWith('\\p')) {
        if (inHeading && headingContent.trim()) {
          convertedLines.push({ type: 'heading', content: headingContent.trim() });
          headingContent = '';
          inHeading = false;
        }
        if (inParagraph && paragraphContent.trim()) {
          convertedLines.push({ type: 'paragraph', content: paragraphContent.trim(), footnotes: [...currentFootnotes] });
          currentFootnotes = [];
        }
        paragraphContent = cleanedLine.replace('\\p', '').trim();
        inParagraph = true;
      } else if (inParagraph) {
        paragraphContent += ' ' + cleanedLine;
      } else if (inHeading) {
        headingContent += ' ' + cleanedLine;
      } else {
        convertedLines.push({ type: 'paragraph', content: cleanedLine, footnotes: [...currentFootnotes] });
        currentFootnotes = [];
      }
    });

    if (inParagraph && paragraphContent.trim()) {
      convertedLines.push({ type: 'paragraph', content: paragraphContent.trim(), footnotes: [...currentFootnotes] });
    }
    if (inHeading && headingContent.trim()) {
      convertedLines.push({ type: 'heading', content: headingContent.trim() });
    }

    let finalOutput = [];

    convertedLines.forEach(line => {
      let processedContent = processInlineMarkers(line.content);
      processedContent = processedContent.replace(/\\b/g, '');

      if (line.type === 'title') {
        finalOutput.push(`<div className='title_of_chapter'><p>${processedContent}</p></div>`);
      } else if (line.type === 'heading') {
        finalOutput.push(`<div className='paragraph_heading'><p>${processedContent}</p></div>`);
      } else if (line.type === 'paragraph') {
        finalOutput.push(`<div className='main_text'>`);
        
        if (line.footnotes && line.footnotes.length > 0) {
          line.footnotes.forEach(footnote => {
            const processedFootnoteText = processInlineMarkers(footnote.text).replace(/\\b/g, '');
            finalOutput.push(
              `<div className='speech-bubble' style={{ display: visibleBubbles[${footnote.number}] ? 'block' : 'none' }} onClick={() => handleSupClick(${footnote.number})}>`,
              `<p><sup>${footnote.number}</sup> ${processedFootnoteText}</p>`,
              `</div>`
            );
          });
        }

        if (processedContent.includes('<sup>')) {
          const footnoteNumberMatch = processedContent.match(/<sup>(\d+)<\/sup>/);
          if (footnoteNumberMatch) {
            const footnoteNumber = footnoteNumberMatch[1];
            finalOutput.push(`<p onClick={() => handleSupClick(${footnoteNumber})}>${processedContent}</p>`);
          } else {
            finalOutput.push(`<p>${processedContent}</p>`);
          }
        } else {
          finalOutput.push(`<p>${processedContent}</p>`);
        }

        finalOutput.push(`</div>`);
      }
    });

    const convertedText = finalOutput.join('\n');
    setOutputText(convertedText);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(outputText)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error('Failed to copy text: ', err));
  };

  return (
    <div className="minister-home qisas_converter stories">
      <div>
        <header>
          <div>
            <h2>Conv<span>e</span>rt<span>e</span>r from th<span>e</span> Parat<span>e</span>xt to HTML</h2>
          </div>
        </header>
        <div className="sep_part1">
          <div className="">
            <textarea
              value={inputText}
              onChange={handleInputChange}
              className="border border-green-400 rounded-md"
              placeholder="Paste your text here..."
              rows={10}
              cols={50}
            />
            <button className="hover:bg-blue-700 bg-blue-500 text-white py-2 px-4" onClick={handleConvertClick}>
              Convert
            </button>
          </div>

          <main>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>OUTPUT:</div>
              <button 
                className="copy_btn" 
                onClick={handleCopyClick}
                disabled={!outputText}
                style={{
                  padding: '5px 10px',
                  backgroundColor: copied ? '#4CAF50' : '#008CBA',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: outputText ? 'pointer' : 'not-allowed',
                  opacity: outputText ? 1 : 0.6
                }}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="output_result border border-gray-100 rounded-md">
              {outputText || 'Your converted text will appear here...'}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ConverterForQisas;