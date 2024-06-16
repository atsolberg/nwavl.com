import Heading from "../heading/Heading";
import ExpandableImage from "../expandable-image/ExpandableImage";
import ableton_config from "../../images/ableton_configuration.jpeg";

export default function TroubleshootingInfo() {
  return (
    <div>
      <Heading as="h3" size="md">
        No words on DSM?
      </Heading>
      <p className="mb-2">
        You can change the output from the switcher in Atem. In the 'Outputs'
        menu, change the 'DSM' output to point to 'Room' instead of 'DSM'. That
        way the band will see the same thing as the audience.
      </p>

      <p className="mb-2">
        This usually happens when we forget to add a 'stage' action to the
        slides in the song. Don't forget to fix the stage action on that song
        after service so it doesn't happen again and set the 'DSM' output back
        to 'DSM'
      </p>

      <h4 className="font-bold">to fix the song:</h4>

      <ol className="list-decimal">
        <li>
          Highlight all the slides in the song except for the copyright slide
        </li>
        <li>Right click any of them.</li>
        <li>
          Click 'Add action', then 'Stage'{" "}
          <span className="text-gray-600 text-xs">
            If there is already a stage action, you may have to remove it first.
          </span>
        </li>
        <li>You'll see a dropdown for actions, choose 'DSM'</li>
      </ol>

      <Heading as="h3" size="md">
        No video to obs from switcher?
      </Heading>
      <p className="mb-2">
        Edit the `Atem` -&gt; properties, switch the `Device` to something else,
        then back to `Blackmagic Design`
      </p>

      <Heading as="h3" size="md">
        Stream Deck not working?
      </Heading>
      <p className="mb-2">
        Make sure the stream deck app is not running, start the companion app,
        click the icon by the clock and 'Launch GUI', from the 'Surfaces' tab
        click 'Rescan USB', if it still thinks Stream Deck app is running, open
        Task Manager, find the Stream Deck instance, kill it with fire, Rescan
      </p>

      <Heading as="h3" size="md">
        No Audio on the 'OldS' channel in ATEM?
      </Heading>
      <p className="mb-2">
        Make sure the PC audio device is set to Black Magic.
      </p>

      <Heading as="h3" size="md">
        Outputs on ProPresenter Switched or not working?
      </Heading>
      <ul className="list-decimal">
        <li>
          Make sure the lights on the back of the decimators are orange (not
          red), reset cables if red.
        </li>
        <li>
          In Apple's display settings - Make sure that the retina display is set
          to 'Main Display', and decimators are set to 'Extend'.
        </li>
        <li>
          Make sure the displays (Audience and Stage) are both enabled in
          Pro-Presenter (2 green lights top right in ProPresenter)
        </li>
        <li>
          In ProPresenter &gt; Configure Displays &gt; make sure Screen #1 is
          Decimator, Screen #2 is NDI
        </li>
      </ul>

      <Heading as="h3" size="md">
        'Pre-audio' button does nothing?
      </Heading>
      <p className="mb-2">
        Make sure on the pc, a scene in OBS is highlighted, otherwise the 'cut'
        operation won't do anything.
      </p>

      <Heading as="h3" size="md">
        Words/NDI video not working? is just orange?
      </Heading>
      <p className="mb-2">
        Make sure the pro-presenter macbook is on the wired lan, not the wifi.
        You might need to restart pro-presenter and/or the macbook. In OBS,
        right click on the `Program` feed, click `Fullscreen Window`, `Black
        Magic` Then make sure they the Pro-Presenter op has the right 'Audience
        Look' set for the current slides.
      </p>

      <Heading as="h3" size="md">
        Audio level in Atem and OBS but no audio in headphones?
      </Heading>
      <p className="mb-2">
        Power cycle the new (top) switcher, sometimes it just needs to restart.
      </p>

      <Heading as="h3" size="md">
        Camera's look really orange (umpa lumpa)
      </Heading>
      <p className="mb-2">
        The white balance should be at 32000K, some times it gets reset to
        52000K
      </p>

      <Heading as="h3" size="md">
        Ableton isn't configure right
      </Heading>
      <p className="mb-2">This is the correct ableton configuration:</p>
      <ExpandableImage src={ableton_config} alt="" className="mt-1" />
    </div>
  );
}
