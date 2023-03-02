import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <p>
      The Link component enables client-side navigation between two pages in the same Next.js app.<br /><br />

      Client-side navigation means that the page transition happens using JavaScript, which is faster than 
      the default navigation done by the browser.<br /><br />

      Here’s a simple way you can verify it:<br /><br />

      Use the browser’s developer tools to change the background CSS property of html to yellow.<br /><br />
      Click on the links to go back and forth between the two pages.<br /><br />
      You’ll see that the yellow background persists between page transitions.<br /><br />
      This shows that the browser does not load the full page and client-side navigation is working.
      </p>
    </>
  );
}