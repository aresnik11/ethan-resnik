import React from "react";
import { Button } from "semantic-ui-react";

const Resume = () => {
  return (
    <div>
      <Button
        color="black"
        size="big"
        as="a"
        href="https://drive.google.com/file/d/1Q9Wh2fnoiQ9BNjyyTS4A71rnQ9h5tfNZ/preview"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </Button>
      <iframe
        src="https://drive.google.com/file/d/1Q9Wh2fnoiQ9BNjyyTS4A71rnQ9h5tfNZ/preview"
        title="Ethan Resnik Resume"
        className="resume"
      />
    </div>
  );
};

export default Resume;
