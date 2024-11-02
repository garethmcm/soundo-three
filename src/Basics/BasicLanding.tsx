function BasicLanding() {
    return (

<div className="max-w-xl w-full px-4">
          <h1 className="text-2xl font-bold mb-4">Here are the basics</h1>
          <p className="text-lg leading-relaxed">
            See. Below is a rough overview of a signal being processed or some such.
            {/* accordion */}
            <div className="collapse collapse-arrow bg-base-100 bg-navColour bg-opacity-10">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">Sound works like dis</div>
              <div className="collapse-content text-base">
                <p>You see.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 bg-navColour bg-opacity-10">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Compression works like this</div>
              <div className="collapse-content text-base">
                <p>Compressssss</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 bg-navColour bg-opacity-10">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-base">EQ works like this</div>
              <div className="collapse-content text-m">
                <p>Ding.</p>
              </div>
            </div>
          </p>
    </div>
    );
}

export default BasicLanding;