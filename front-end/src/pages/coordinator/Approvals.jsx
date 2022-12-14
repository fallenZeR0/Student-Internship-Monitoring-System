import React from "react";
import Approval from "../../components/coordinator/ApprovalIntern";
import {useSelector} from "react-redux";
// import {useEffect} from "react";

// import {GoSearch} from "react-icons/go";

const Approvals = React.memo(() => {
  const {approvalInterns} = useSelector((state) => state.intern);

  const renderApprovals = () => {
    if (!approvalInterns) {
      return <h1>loading...</h1>;
    }

    if (approvalInterns.length === 0) {
      return <h1>No approval request at the moment</h1>;
    }

    return approvalInterns.map((intern, index) => {
      return <Approval intern={intern} key={index} index={index} />;
    });
  };

  return (
    <section className="approvals">
      <header>Approvals</header>
      <div className="approvals-intern-container">{renderApprovals()}</div>
    </section>
  );
});

export default Approvals;
