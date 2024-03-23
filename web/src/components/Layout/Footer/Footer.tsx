import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full flex justify-center items-center">
			<Link className="link" href="/impressum">
				Impressum
			</Link>
			<span className="border-x-2 border-primary h-16 mx-12" />
			<Link className="link" href="/copyright">
				Copyright
			</Link>
		</footer>
	);
}
