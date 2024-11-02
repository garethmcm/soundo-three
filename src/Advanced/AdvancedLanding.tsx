function AdvancedLanding() {
    return (

<div className="max-w-xl w-full px-4">
          <h1 className="text-2xl font-bold mb-4">Here are the advancedings.</h1>
          <p className="text-lg leading-relaxed">
            See. Below is a rough overview of more signal being processed or some such.
            {/* accordion */}
            <div className="collapse collapse-arrow bg-base-100 bg-navColour bg-opacity-10">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">Sound actually works like dis</div>
              <div className="collapse-content text-base">
                <p>You see.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 bg-navColour bg-opacity-10">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Distortion works like this</div>
              <div className="collapse-content text-base">
                <p>Shhhzzzz</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 bg-navColour bg-opacity-10">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-base">Reverb works like this</div>
              <div className="collapse-content text-m">
                <p>Diiiing</p>
              </div>
            </div>
          </p>
    </div>
    );
}

export default AdvancedLanding;