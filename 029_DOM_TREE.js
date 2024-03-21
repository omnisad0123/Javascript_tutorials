<!DOCTYPE html>
<html>
  <head>
    <title>DOM Tree Example</title>
  </head>
  <body>
    <header>
      <h1>Welcome to my website!</h1>
    </header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <main>
      <section>
        <h2>About</h2>
        <p>This is the about section of my website.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>You can reach me at example@example.com.</p>
      </section>
    </main>
    <footer>
      <p>© 2023 My Website. All rights reserved.</p>
    </footer>
  </body>
</html>


// DOM Tree structure
// html
// └───head
// │   └───title
// │       └───"DOM Tree Example"
// └───body
//     └───header
//     │   └───h1
//     │       └───"Welcome to my website!"
//     └───nav
//     │   └───ul
//     │       └───li
//     │           └───a
//     │               └───"Home"
//     │       └───li
//     │           └───a
//     │               └───"About"
//     │       └───li
//     │           └───a
//     │               └───"Contact"
//     └───main
//     │   └───section
//     │   │   └───h2
//     │   │       └───"About"
//     │   │   └───p
//     │   │       └───"This is the about section of my website."
//     │   └───section
//     │       └───h2
//     │           └───"Contact"
//     │       └───p
//     │           └───"You can reach me at example@example.com."
//     └───footer
//         └───p
//             └───"© 2023 My Website. All rights reserved."





// traversing dom tree


// const rootNode=document.getRootNode();
// const htmlel=rootNode.childNodes[0];
// const headel=htmlel.childNodes[0];
// const textNod=headel.childNodes[1];
// const bodyel=textNod.childNodes[2];
// console.log(textNod)