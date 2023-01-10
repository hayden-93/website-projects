import React from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const ClipboardWebsite = () => {
  return (
    <div>
      <Head>
        <Link
          href='https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div>
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div>
          <button>Download for iOS</button>
          <button>Download for Mac</button>
        </div>
        <div>
          <h2>Keep track of your snippets</h2>
          <p>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
          <section className='image and features'>
            <Image src='' alt='' width={300} height={300} />
            <div>
              <span>Quick Search</span>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div>
              <span>iCloud Sync</span>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div>
              <span>Complete History</span>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </section>
          <section className='access anywhere'>
            <h2>Access Clipboard anywhere</h2>
            <p>
              Whether youre on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </p>
            <Image src='' alt='' width={300} height={300} />
          </section>
          <section className='icons'>
            <h2>Supercharge your workflow</h2>
            <p>Weve got the tools to boost your productivity.</p>
            <div>
              <Image src='' alt='' width={40} height={40} />
              <span>Create blacklists</span>
              <p>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
            <div>
              <Image src='' alt='' width={40} height={40} />
              <span>Plain text snippets</span>
              <p>
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div>
              <Image src='' alt='' width={40} height={40} />
              <span>Sneak preview</span>
              <p>
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </section>
          <section className='company images'>
            <div>
              <Image src='' alt='' width={40} height={40} />
            </div>
            <div>
              <Image src='' alt='' width={40} height={40} />
            </div>
            <div>
              <Image src='' alt='' width={40} height={40} />
            </div>
            <div>
              <Image src='' alt='' width={40} height={40} />
            </div>
            <div>
              <Image src='' alt='' width={40} height={40} />
            </div>
          </section>
          <section className='clipboard call to action'>
            <h2>Clipboard for iOS and Mac OS</h2>
            <p>
              Available for free on the App Store. Download for Mac or iOS, sync
              with iCloud and youre ready to start adding to your clipboard.
            </p>
            <div>
              <button>Download for iOS</button>
              <button>Download for Mac</button>
            </div>
          </section>
          <footer>
            <Image src='' alt='' width={40} height={40} />
            <div>
              <ul>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Press Kit</li>
                <li>Install Guide</li>
              </ul>
            </div>
            <div className='social icons'>
              <Image src='' alt='' width={40} height={40} />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ClipboardWebsite;
