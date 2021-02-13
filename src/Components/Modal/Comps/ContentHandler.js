import React from "react";
import CartModal from "./CartModal";
import ContactusMessageModal from "./ContactusMessageModal";
import CouponModal from "./CouponModal";
import ShareModal from "./ShareModal";

export default function ContentHandler({ content, params }) {
  switch (content) {
    case "cart":
      return <CartModal />;
    case "share":
      return <ShareModal />;
    case "coupon":
      return <CouponModal code={params.code} />;
    case "contactus":
      return <ContactusMessageModal params={params} />;
    default:
  }
}
