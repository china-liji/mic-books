export function Popup({ onClose }) {
  const onButtonClick = () => {
    // ...
    onClose();
  }

  return (
    <div>
      <blockquote>弹窗内容</blockquote>
      <p>
        <button onClick={onButtonClick}>确定</button>
      </p>
    </div>
  );
}