import React from "react";
import MailTable from "./MailTable";

//Page
function MailPage() {
  const mailList = [
    {
      name: "Tomer",
      email: "levitomer1996@gmail.com",
      message: "Fuck you fuck you",
      time_posted: 1613055527265,
      isReaded: true,
    },
    {
      name: "Tomer",
      email: "levitomer1996@gmail.com",
      message: "Fuck you fuck you",
      time_posted: 1613055527265,
      isReaded: false,
    },
  ];
  return (
    <div>
      <MailTable mailList={mailList} />
    </div>
  );
}

export default MailPage;
