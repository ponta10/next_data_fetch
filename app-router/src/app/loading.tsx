export default function Loading({ color = "blue", size = 80 }) {
  return (
    <div
      style={{
        border: "4px solid rgba(0, 0, 0, 0.1)",
        borderTopColor: color,
        borderRadius: "50%",
        width: size,
        height: size,
        animation: "spin 1s linear infinite",
      }}
    ></div>
  );
}
