import Link from "next/link";

export default async function Page() {
  return (
    <div style={{ padding: "8px" }}>
      <p style={{ fontWeight: "bold", margin: "8px 0" }}>ニュースです</p>
      <Link href="/">トップに戻る</Link>
    </div>
  );
}