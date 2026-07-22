import React, { useState } from "react";
import Equity from "./Equity";
import Currency from "./Currency";
import Commodity from "./Commodity";

const BrokeragePage = () => {
  const [activeTab, setActiveTab] = useState("Equity");
  const setTab = (currentTab) => {
    setActiveTab(currentTab);
  };
  return (
    <div className="container  m-3 ">
      <h3
        style={{
          borderBottom: activeTab === "Equity" ? "3px solid blue" : "none",
        }}
        className="d-inline p-3  fs-5"
        onClick={() => {
          setActiveTab("Equity");
        }}
      >
        Equity
      </h3>
      <h3
        style={{
          borderBottom: activeTab === "Currency" ? "3px solid blue" : "none",
        }}
        className="d-inline p-3 fs-5"
        onClick={() => {
          setActiveTab("Currency");
        }}
      >
        Currency
      </h3>
      <h3
        style={{
          borderBottom: activeTab === "Commodity" ? "3px solid blue" : "none",
        }}
        className="d-inline p-3 fs-5"
        onClick={() => {
          setActiveTab("Commodity");
        }}
      >
        Commodity
      </h3>
      <hr />

      {activeTab === "Equity" ? (
        <Equity />
      ) : activeTab === "Currency" ? (
        <Currency />
      ) : activeTab === "Commodity" ? (
        <Commodity />
      ) : null}

      <h3 className="text-center mt-4 fs-5">
        Calculate your costs upfront using our brokerage calculator
      </h3>
      <div className="row">
        <h3 className="mt-5 p-3 fs-4 ">Charges for account opening</h3>
        <table className="border m-2">
          <thead className="border">
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody className="border">
            <tr>
              <td>Individual account</td>
              <td>free</td>
            </tr>
            <tr>
              <td>Minor account</td>
              <td>free</td>
            </tr>
            <tr>
              <td>NRI account</td>
              <td> ₹ 500</td>
            </tr>
            <tr>
              <td>HUF account</td>
              <td>free (online) / ₹ 500 (offline)</td>
            </tr>
            <tr>
              <td>Partnership, LLP, and Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <h3 className="mt-5 p-3 fs-4 ">
          Demat AMC (Annual Maintenance Charge)
        </h3>
        <h3 className=" p-3 fs-5 ">Free for first year*</h3>
        <h4 className="fs-6 p-3">
          From second year onwards, for BSDA accounts:
        </h4>

        <table className="border m-2">
          <thead className="border">
            <tr>
              <th>Value of holdings</th>
              <th>AMC</th>
            </tr>
          </thead>
          <tbody className="border">
            <tr>
              <td>Up to ₹4 lakh</td>
              <td>free</td>
            </tr>
            <tr>
              <td>₹4 lakh – ₹10 lakh</td>
              <td>₹100 per year + 18% GST, charged quarterly</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td> ₹300 per year + 18% GST, charged quarterly</td>
            </tr>
          </tbody>
        </table>
        <p className="pb-5 fs-6 mt-2">
          For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of
          holdings value, charged quarterly.
          <br /> To learn more about BSDA, click here. To learn more about AMC,
          click here.
          <br />
          *Resident individual accounts only.
        </p>
        <h3 className="fs-4">Charges for optional value added services</h3>
        <table className="border m-2 mt-4">
          <thead className="border">
            <tr>
              <th>Service</th>
              <th> Billing Frequency</th>
              <th> Charges</th>
            </tr>
          </thead>
          <tbody className="border">
            <tr>
              <td>Tickertape</td>
              <td> Monthly / Quarterly / Annual</td>
              <td> Free: 0 | Pro: 249/699/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td> Per transaction</td>
              <td> Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td> Monthly</td>
              <td> Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row mt-5">
        <h3 className="fs-5 mb-4">Charges explained</h3>
        <div className="col text-muted">
          <h3 className="fs-5">Securities/Commodities transaction tax</h3>
          <p className="my-3">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <h3 className="fs-6 text-muted">Transaction/Turnover Charges</h3>
          <p className="my-3 fs-7">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h3 className="fs-6 text-muted">Transaction/Turnover Charges</h3>
          <p className="my-3 fs-7">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h3 className="fs-6 text-muted">Transaction/Turnover Charges</h3>
          <p className="my-3 fs-7">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h3 className="fs-6 text-muted">Transaction/Turnover Charges</h3>
          <p className="my-3 fs-7">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h3 className="fs-6 text-muted">Transaction/Turnover Charges</h3>
          <p className="my-3 fs-7">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h3 className="fs-6 text-muted">Transaction/Turnover Charges</h3>
          <p className="my-3 fs-7">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
        </div>
        <div className="col">
          <h3 className="fs-5 text-muted">GST</h3>
          <p className="my-3">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <h3 className="fs-6 text-muted">Transaction/Turnover Charges</h3>
          <p className="my-3 fs-7">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h3 className="fs-6 text-muted">Transaction/Turnover Charges</h3>
          <p className="my-3 fs-7">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h3 className="fs-6 text-muted">Transaction/Turnover Charges</h3>
          <p className="my-3 fs-7">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h3 className="fs-6 text-muted">Transaction/Turnover Charges</h3>
          <p className="my-3 fs-7">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h3 className="fs-6 text-muted">Transaction/Turnover Charges</h3>
          <p className="my-3 fs-7">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h3 className="fs-6 text-muted">Transaction/Turnover Charges</h3>
          <p className="my-3 fs-7">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
        </div>
      </div>
      <h4 className="fs-6 mt-5 mb-3 text-muted">Disclaimer</h4>
      <p className="text-muted fs-6 pb-5">
        For Delivery based trades, a minimum of ₹0.01 will be charged per
        contract note. Clients who opt to receive physical contract notes will
        be charged ₹20 per contract note plus courier charges. Brokerage will
        not exceed the rates specified by SEBI and the exchanges. All statutory
        and regulatory charges will be levied at actuals. Brokerage is also
        charged on expired, exercised, and assigned options contracts. Free
        investments are available only for our retail individual clients.
        Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
        (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
        contract value will be charged for contracts where physical delivery
        happens. For netted off positions in physically settled contracts, a
        brokerage of 0.1% will be charged.
      </p>
    </div>
  );
};

export default BrokeragePage;
