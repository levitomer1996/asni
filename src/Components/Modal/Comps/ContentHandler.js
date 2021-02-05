import React from "react";
import CartModal from "./CartModal";
import ShareModal from "./ShareModal";

export default function ContentHandler({ content, params }) {
  switch (content) {
    case "cart":
      return <CartModal params={params} />;
    case "share":
      return <ShareModal />;
    default:
      <div>Nothing to render</div>;
  }
}
