import React from 'react';


function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav class="local">
                <a href="#webservers">Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#onlineimg">Image Optimization</a>
                <a href="#favicon">Favicons</a>
                <a href="#css">CSS</a>
                <a href="#forms">Forms</a>
                <a href="#node">Node, npm, and Express</a>
            </nav>
            <article id="webservers">
                <h3>Web Servers</h3>
                <p>
                    The word <strong>index</strong>, as it relates to websites and servers, used to have a much more literal meaning. 
                    In early web servers, a person would navigate through it like a local file directory today, 
                    where after opening a directory, one would see a list of that directory's contents, indexed 
                    in some way. If someone wanted to provide their own custom index to curate navigation, they would
                    specify by naming that file index. As web applications became more complex, the index page became
                    to be considered the <strong>designated homepage</strong>, where most users of the application are expected to start
                    from. OSU's Engineering websites use Apache, which has index.html as the designated homepage.
                </p>
                <p>
                    When you compare the network details of index.html on Oregon State's web server versus its 
                    network details locally, many differences can be seen. One major difference is in the <strong>request
                    URL</strong>, which for the web server has an <strong>HTTPS protocol</strong>, followed by the server name and path. The
                    end of the path is omitted, and index.html is loaded by default. On the other hand, the URL for
                    the local request has the <strong>file schema</strong>, followed by index.html's file location. Another difference
                    is that the local request has only two response headers, Content-Type and Last-Modified. The
                    web server request, on the other hand, has a plethora of <strong>request and response headers</strong>
                    that include a large amount of auxiliary information related to either the request or file.  
                </p>
                <p>
                    The favicon.ico file is the tiny icon that can be seen beside the title in the Chrome tab. This 
                    icon is automatically requested by Oregon State's web application, and will be returned by default. As 
                    long as something doesn't go wrong at the university, it will successfully return a <strong>status code</strong> of
                    <strong>200 OK</strong>. On the other hand, main.css and main.js are referenced in the head of index.html, and because of that
                    they are requested by a web client when index.html is accessed. Because there is no main.css and 
                    main.js in the same directory as index.html, the web server cannot locate them, and returns a status 
                    code of <strong>404 Not Found</strong> for each of them. 
                </p>
                <p>
                    The <strong>parts of the URL</strong> to the web file are as follows: First, 
                    HTTPS, which is the <strong>scheme</strong>, tells the web client which protocol
                    to use to request the resource. The scheme HTTPS is typically used to transfer
                    hypertext, securely. Second is the <strong>subdomain</strong>, web.engr, which indicates a specific subsection
                    of the domain. Third is the <strong>host domain</strong>, oregonstate.edu, which, combined
                    with the subdomain, is used by the web client to request an IP address from a DNS to make the request.
                    Lastly, the <strong>path to the resource</strong> is /~normmatt/a1-normmatt/, which identifies 
                    the resource on the server. Because the path doesn't end with a file, the web application
                    recognizes the ending '/', and routes to index.html, as that is considered the designated homepage.
                </p>
            </article>
            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>
                    The concept of <strong>frontend design</strong>, is to create the most satisfying experience possible for users. This can include 
                    things like the conception and implementation of the page and the graphical user-interface, as well as curating
                    the interactive experience of a user. One necessary aspect of good frontend design is having a <strong>consistent and 
                    coherent</strong> color scheme, font, typography scheme, as well as a tasteful photography, icon, and illustration scheme.
                    Another necessary aspect is having a navigation system that suits the needs of the users. Many facets of frontend
                    design are related to the concept of <strong>Usability</strong>. The five E's of usability can be seen below.
                </p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>A website should be effective at what it is intended to do. It should give users accurate and expected results.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>A website should be efficient. Users should be able to perform their tasks quickly, and in relatively few steps.</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>A website should be easy to navigate. A new user should be able to quickly understand how to achieve their goal.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>A website should be error-free. It should be consistently accessible, and not give any roadblocks to users.</dd>
                    <dt><strong>Enjoyable or Engaging</strong></dt>
                    <dd>A website should be engaging! The overall experience should incentivize the user to come back again.</dd>
                </dl>
                <p>
                    The purpose of page layout tags (as well as other <strong>block-level elements</strong>) is to delineate content, as well as provide a 
                    structure to the content. While they don't do much visually on the page (other than newline breaks),
                    they allow easier use of <strong>CSS</strong>. It's easier and quicker to form a coherent style of the page by applying specific styles 
                    to each of the tags. More specifically, the&lt;header&gt; element shows the banner for the site, and the 
                   &lt;nav&gt; element usually contains anchors to navigate from the current page to others. The 
                   &lt;main&gt; element has the primary content of the page inside it. Nested inside&lt;main&gt;
                    are&lt;section&gt; and&lt;article&gt; elements.  The&lt;section&gt; element 
                    is used to group content that is generally related, like sections of a newspaper. On the other hand,&lt;article&gt;
                    elements are used to denote specific topics, like a specific story in a newspaper. Articles can be used inside of sections, but not the other 
                    way around. Another page layout tag is the&lt;aside&gt; element, which goes to the side of an article and displays content 
                    related to it. The&lt;figure&gt; is like an aside, but with media. It includes&lt;img&gt; and 
                   &lt;figcaption&gt; tags. The&lt;blockquote&gt; tag's purpose is to hold very long quotations. They
                    can use the&lt;q&gt; and&lt;cite&gt; tags. The&lt;footer&gt; element 
                    contains legal information, or other things you would typically have on a footer of a document. Finally, the&lt;div&gt; 
                    tag's purpose is to hold dynamic content.
                </p>
                <ol>
                    <li>
                        Anchors to external content: in your &lt;a&gt; tag, have your href attribute's value
                        equal to the <strong>absolute URL</strong> of the content you want to link to. An absolute URL includes
                        the protocol and domain name.
                    </li>
                    <li>
                        Anchors to internal content: typically for internal content, you would use a <strong>relative URL</strong>
                        as your href attribute value. The relative URL should be the location relative to the HTML 
                        file containing the anchor. You can navigate down <strong>child directories</strong> using "directory/content", or
                        navigate to <strong>parent directories</strong> by using ".." to signify the immediate parent directory.
                    </li>
                    <li>
                        Anchors from page-to-page: Other content page anchors are typically embedded in a <strong>&lt;nav&gt; tag</strong>.
                        If it is external, have the href attribute value be an absolute URL, and if it is internal, have it 
                        be relative. One other consideration is if the URL has a reserved HTML character in it, you must use 
                        <strong>Percent-encoding</strong>.
                    </li>
                </ol>
            </article>
            <article id="onlineimg">
                <h3>Optimizing Online Images</h3>
                <p>
                    If you want images to be optimized for a modern web application, they must comply to
                    six specifications. The first is to have a <strong>descriptive file name</strong>. For 
                    <strong>search engine optimization (SEO)</strong>, file names should have a few keywords 
                    about the image, delineated by hyphens, so that web crawlers can obtain good information 
                    about the image. Second, they must have a <strong>small file size</strong>, to have them 
                    load quickly. Remember to only serve high resolution images to devices that can use them well.
                    Third, is to have <strong>exact dimensions</strong>. If you don't crop the images to fit on 
                    your web page, then they take a longer time to load. Fourth, is to have images be the 
                    <strong>correct file format</strong>. Having the correct format for a specific media gives 
                    the best compromise between speed and quality. Fifth, if to have <strong>reduced resolution</strong>,
                    to lower file size and increase speed. You can have multiple image resolutions for different devices.
                    Finally, the sixth is to have the best <strong>color mode</strong>, as some file formats don't lose 
                    much fidelity from reducing the amount of data used to determine color. Most formats are fine with RGB, 
                    except for GIF, which should use Indexed.
                </p>
                <p>
                    For photos, the most appropriate file formats are JPG and WebP. Both of these formats were designed for 
                    photos in mind, and compress them down to small file sizes while still being rectangular. Compared to 
                    other file formats, both retain much more information about color, and are much more suitable for images 
                    with a lot of complexity. For line art, the formats SVG, GIF, and PNG are preferred. For line art, much
                    of the visual detail comes from distinct lines and shapes, rather than color. Both of these formats 
                    compress to much smaller file sizes, and reduce the amount of data used for color, which does not 
                    affect line art as much as it would affect a photo. SVG is especially good at line art, because of its 
                    vector nature. This allows images with a non-large amount of elements to be mapped to coordinates,
                    which makes the image easy to upscale as well as being memory efficient.
                </p>
            </article>
            <article id="favicon">
                <h3>Favicons</h3>
                <p>
                    <strong>Favicons</strong> are used to quickly identify a site across various devices. To do this, a consistent symbol/icon should be 
                    saved in multiple file formats and resolutions, for it to be accessed by different kinds of devices. Favicons are typically 
                    put in the root directory of the application, and Web browsers typically look at link tags in the head of the HTML file to be instructed 
                    what to do with them. You can also give instructions to have the icon be the anchor to a bookmark, an app icon on a mobile phone, or 
                    the anchor to a result on a search engine.
                </p>
            </article>
            <article id="css">
                <h3>CSS</h3>
                <p>
                    While a website can be made just using HTML, <strong>Cascading Style Sheets</strong> allows you to take web design from Lincoln Logs
                    to an oil painting. CSS allows a web developer to change an HTML element's default styles to make the user's experience more enjoyable,
                    whether it is from improving usability, readability, or legibility. It also gives the developer tools to make a coherent and individualized
                    brand by using a global stylesheet that applies to every static page. CSS also assists with the structure of the page, by adding an inheritance
                    structure for style, as well as a block model to help with positioning.
                </p>
                <p>
                    There are five ways to incorporate styles. The first, and most preferred, is 
                    to have an external stylesheet linked in the head of the website. Global external
                    stylesheets are the most efficient, and cleanest way to implement style on a web application.
                    Second, is to embed a &lt;style&gt; tag within the area. This is typically used for 
                    exceptional, one-off cases, where the style choices differ greatly from the rest of the application.
                    Third, is <strong>inline</strong>, by using the style="" attribute. This has the same use cases 
                    as the tag, but the scope is reduced to a single element and its descendants. Fourth, is in 
                    <strong>JavaScript template literals</strong>. This way allows JavaScript functions to send 
                    to define and return style information. Finally, the fifth way is to change the 
                    <strong>Document Object Model</strong> using JavaScript. This is one of the most direct
                    ways to dynamically change content on a web application.
                </p>
            </article>
            <article id="forms">
                <h3>Forms</h3>
                <p>
                    It's very important to make forms accessible to all users, including ones with 
                    physical or mental disabilities. The ADA even requires government funded websites to 
                    adhere to accessibility requirements. The six goals of accessible forms are: One, to 
                    <strong>provide clear instructions before the form</strong>, so that it is obvious how to fill out the form, 
                    and observable by text readers, as placeholder values are not. Two, is to <strong>give users the reason
                    you're collecting the data</strong>, and indicating which fields are required. This helps with privacy concerns,
                    as well as giving users your intention with the data, which will help them make choices as to what information
                    to give. Third, is to <strong>set the first field to autofocus</strong>, so that the form can be filled out without
                    a mouse. Fourth, is to <strong>make sure each form control can be filled in using the keyboard</strong>, for 
                    the same reason as before. Fifth, is to <strong>add tab indexing to complicated forms</strong>, to make the order of fields 
                    obvious. And Lastly, is to <strong>ensure validation messages are screen readable.</strong>, because built in browser 
                    messages are not.
                </p>
                <p>
                    The major tags of a form start with the <strong>form</strong> tag, which require an action and method attributes. The tag 
                    is the skeleton of a form, and tells where and how to send the HTTP request telling the data. There's also the 
                    <strong>fieldset and legend</strong> tags, which help delineate and describe different sections of the form. The 
                    <strong>label</strong> tag is combined with controls, and describes them. The <strong>input</strong> tag is where 
                    the information is inputted. It has various types, such as email, checkbox, or radio, and it is a must to 
                    have a name attribute, as that is going to be the key for the data in the server. There's also <strong>select</strong>
                    tags, which give the user a list of choices in a drop-down tab. A name attribute is required, as well as 
                    nested <strong>option</strong> tags, which each contain value attributes which will be the options in the select tag.
                    The <strong>textarea</strong> tag is a text box that allows multiple lines of text, and has many attributes.
                    Finally, the <strong>button</strong> text is usually used to submit the form.
                </p>
            </article>
            <article id="node">
                <h3>Node, npm, and Express</h3>
                <p>
                    <strong>Node.js</strong> is a <strong>JavaScript</strong> runtime that is asynchronous, 
                    event-driven, open-source, and cross-platform. It is a very popular "backend" for web 
                    applications, taking care of the server-side and networking tasks of them. 
                    <strong>Node Package Manager (npm)</strong> is the package manager for node, that fulfills two roles.
                    The first is being an online repository for Node.js packages, and the second is being a command-line 
                    utility that allows us to install packages, manage dependencies, and alter the runtime environment
                    from a shell. <strong>Express.js</strong> is a popular framework of Node.js, and it provides various 
                    APIs to help easily do common web app tasks. Express gives the ability to easily get, post and delete data,
                    define ports and routes, and serve static files conveniently. Using these three technologies reduces the amount 
                    of development time by a drastic amount, and would likely improve the quality/consistency of the application.
                </p>
            </article>
        </>
            );
}

export default TopicsPage;