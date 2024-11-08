/* eslint-disable react/prop-types */

const Account = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account__content--wrapper">
        <h3 className="account__title">{title}</h3>
        <p className="account__amount">{amount}</p>
        <p className="account__amount--description">{description}</p>
      </div>
      <div className="account__content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
