import Link from "next/link"

export function AboutInfoRight() {
  return (
    <div>
      <h3 className="body-small text-gray-400 mb-6">CLIENTS</h3>
      <ul className="space-y-2 body-text">
        <li>MOËT & CHANDON</li>
        <li>DOM PÉRIGNON</li>
        <li>PRIME</li>
        <li>SONY PLAYSTATION</li>
        <li>LOTUS BISCOFF</li>
        <li>RON BARCELÓ</li>
        <li>KELLOGG&apos;S</li>
        <li>
          <Link 
            href="/work" 
            className="text-[#0F0E0E] hover:opacity-70 transition-opacity underline underline-offset-4"
          >
            VER MÁS
          </Link>
        </li>
      </ul>
    </div>
  )
}
