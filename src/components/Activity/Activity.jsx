import css from './Activity.module.css';

function Activity({ label, quantity }) {
  return (
    <div className={css.activity}>
      <span className={css.label}>{label}</span>
      <span className={css.quantity}>{quantity}</span>
    </div>
  );
}

export default Activity;
