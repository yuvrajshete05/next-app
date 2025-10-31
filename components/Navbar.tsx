import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container navbar">
        <Link href="/" className="brand">Hierarchy</Link>
        <nav style={{display:'flex',gap:12,alignItems:'center'}}>
          <a href="#" style={{color:'#444',textDecoration:'none'}}>Docs</a>
        </nav>
      </div>
    </header>
  );
}
