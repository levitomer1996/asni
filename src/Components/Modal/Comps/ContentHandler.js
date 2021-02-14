import React from "react";
import CartModal from "./CartModal";
import ContactusMessageModal from "./ContactusMessageModal";
import CouponModal from "./CouponModal";
import ShareModal from "./ShareModal";
import SendMailModal from "./SendMailModal";

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
    case "sendmail":
      return <SendMailModal params={params} />;
    default:
      <div>deflt</div>;
  }
}
