import {Header} from "../components/header";
import {Footer} from "../components/footer";


export const Article = () => {

    return (<>
        <Header />

        <article className="px-4 py-24 mx-auto max-w-7xl" itemID="#" itemScope itemType="http://schema.org/BlogPosting">
            <img src="https://source.unsplash.com/random/480x360/?2" className="object-cover w-full h-64 bg-center rounded-lg" alt="Kutty"/>
            <div className="w-full mx-auto mb-12 text-center md:w-2/3">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">Development</p>
                <h1 className="mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl" itemProp="headline"
                    title="Rise of Tailwind - A Utility First CSS Framework">
                    Rise of Tailwind - A Utility First CSS Framework
                </h1>
                <p className="text-gray-700">
                    Written by
                    <span className="byline author vcard" itemProp="author" itemScope="itemscope"
                          itemType="http://schema.org/Person">
        <a href="/#" target="_blank" itemProp="url" rel="author noopener noreferrer"
           className="text-primary hover:text-primary-dark"><span itemProp="name">Praveen Juge</span></a>
      </span>
                    on <time itemProp="datePublished dateModified" dateTime="2010-08-07 11:11:03-0400" >Jan 02
                    2021</time>
                </p>
            </div>

            <div className="mx-auto prose">
                <p>
                    What if there is an easy way to achieve responsive UI without using any UI kit? Can we create new
                    and fresh designs for every project with a CSS framework? Enter Tailwind CSS, will this be the
                    perfect CSS framework, well let’s find out.
                </p>
                <p>Tailwind is a utility-first CSS framework, the keyword being ‘utility’. It is basically a set of
                    classes that you can use in your HTML.</p>

                <p>
                    Therefore, we don’t have to write any custom CSS to get this button. This can be heavily extended to
                    build whole web applications without the need for any other styles apart from a tailwind.
                </p>
                <p>...</p>
            </div>
        </article>

        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-md px-4 md:px-8">
                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Our competitive
                    advantage</h1>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    This is a section of some simple filler text, also known as placeholder text. It shares some
                    characteristics of a real written text but is random or otherwise generated. It may be used to
                    display a sample of fonts or generate text for testing. Filler text is dummy text which has no
                    meaning however looks very similar to real text. The important factor when using filler text is that
                    the text looks realistic otherwise it will not look very good.<br/><br/>

                    This is a section of some simple filler text, also known as placeholder text. It shares some
                    characteristics of a real written text but is <a href="/#"
                                                                     className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">random</a> or
                    otherwise generated. It may be used to display a sample of fonts or generate text for testing.
                    Filler text is dummy text which has no meaning however looks very similar to real text.
                </p>

                <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">About us</h2>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler text, also
                    known as placeholder text. It shares some characteristics of a real written text but is random or
                    otherwise generated. It may be used to display a sample of fonts or generate text for testing.
                    Filler text is dummy text which has no meaning however looks very similar to real text.</p>

                <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
                    <li>This is a section of some simple filler text</li>
                    <li>Also known as placeholder text</li>
                    <li>It shares some characteristics of a real written text</li>
                </ul>

                <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">“This is a
                    section of some simple filler text, also known as placeholder text. It shares some characteristics
                    of a real written text but is random or otherwise generated.”
                </blockquote>

                <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
                    <img
                        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350"
                        loading="lazy" alt=" by Minh Pham" className="h-full w-full object-cover object-center"/>
                </div>

                <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2>

                <p className="text-gray-500 sm:text-lg">This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real written text but is random or otherwise
                    generated. It may be used to display a sample of fonts or generate text for testing. Filler text is
                    dummy text which has no meaning however looks very similar to real text.</p>
            </div>
        </div>

        <Footer />
    </>)
}