import React, { useState } from "react";

function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch(() => setCopied(false));
  };
  return { copied, copy };
}

export default useCopyToClipboard;
