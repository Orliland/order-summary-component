import "./App.css";
import Hero from "./assets/illustration-hero.svg";
import Music from "./assets/icon-music.svg";

function PlanSelected() {
  return (
    <div className="plan">
      <img src={Music} alt="Icon of plan selected" className="plan__icon" />
      <div className="plan__body">
        <h3 className="plan__title">Annual Plan</h3>
        <p className="plan__amount">$59.99/year</p>
      </div>
      <button className="plan__change">Change</button>
    </div>
  );
}

function Order() {
  return (
    <main className="card">
      <img src={Hero} alt="thumbnail of the card" className="card__thumb" />
      <div className="card__body">
        <h2 className="card__title">Order Summary</h2>
        <p className="card__description">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <PlanSelected />
        <button className="button button--primary">Proceed to Payment</button>
        <button className="button button--secondary">Cancel Order</button>
      </div>
    </main>
  );
}

export default Order;
