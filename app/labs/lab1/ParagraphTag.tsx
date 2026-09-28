export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default browsers
        render them as one contiguous piece of text as shown here on the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph tag
        to tell browsers to render the gaps.
      </p>
      <p id="wd-p-your-1">
        My name is Subhiksha Muthukrishnan. I am studying master’s in Computer
        Science at Northeastern Boston campus. I am from Singapore.
      </p>
      <p id="wd-p-your-2">
        I hope to learn how to build and style interactive websites using HTML,
        CSS and JavaScript. I also want to understand back-end development so I
        can connect my projects to databases and manage data effectively.
        Ultimately, I aim to master the skills needed to create and deploy
        full-stack applications completely from scratch.
      </p>
      <p id="wd-ai-p">
        Wrapping text in a paragraph tag creates vertical spacing because
        browsers apply default margin above and below every p element. This
        separates blocks of text visually, unlike plain text or line breaks,
        which browsers render without that extra space.
      </p>
    </div>
  );
}
