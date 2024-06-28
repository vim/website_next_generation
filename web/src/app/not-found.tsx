import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<h1 className="h1">Resource not found!</h1>
			<Link className="link" href="/">
				Return Home
			</Link>
		</div>
	);
}
