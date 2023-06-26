import React from "react";

import ChecklistItem from "../checklist-item/ChecklistItem";
import Heading from "../heading/Heading";

function PreserviceChecklist() {
  return (
    <section>
      <ul>
        <ChecklistItem>
          On the streaming pc, Start OBS, Streamdeck Companion, Atem, Daunte
          Virtual Soundcard, Daunte Virtual Controller, and Chrome
          (https://studio.resi.io/)
        </ChecklistItem>
        <ChecklistItem>
          Turn on camera's 1, 2, and 3. (Get a tall person to turn on camera 2
          and take the lens cap off)
        </ChecklistItem>
        <ChecklistItem>
          Check Comms - Hit the "com ON" button on the Streamdeck and verify
          with someone else that you can hear each other from the av room and
          camera 1.
        </ChecklistItem>
        <ChecklistItem>
          Check Camera's Look - In Atem, verify the camera feeds look good,
          adjust settings as needed. (Check "Balance" temperature, sometimes
          that gets jacked up)
        </ChecklistItem>
        <ChecklistItem>
          Pre-service Audio Works - Hit the "pre audio" Pre-service button on
          the streamdeck and verify you hear the music in the headphones.
        </ChecklistItem>
        <ChecklistItem>
          Service Audio Works - Hit the "start" button on the Streamdeck and
          verify you hear the band practicing. The "start" button does a couple
          things: the pre-service audio channel on the Streamdeck should get
          moved down, the audio feed from the room should get moved up, and the
          video feed should get faded to camera 2.
        </ChecklistItem>
        <ChecklistItem>
          Scriptures Key Works - Have the pro op put a scripture up and then hit
          the "Scripture" button on the stream deck, verify that the scripture
          is looking good on the lower third of the video feed.
        </ChecklistItem>
        <ChecklistItem>
          Words Key Works - Have the pro op put a song slide up and then hit the
          "Words" button on the stream deck, verify that the slide's words
          appear on the video feed.
        </ChecklistItem>
        <ChecklistItem>
          Make sure podcast backup audio stick is plugged into the sound board
        </ChecklistItem>
      </ul>

      <Heading as="h3" size="md">
        At 10:15
      </Heading>
      <p>
        <ul>
          <ChecklistItem>
            Make sure pre-service audio is running instead of live feed
          </ChecklistItem>
          <ChecklistItem>Set StreamDeck program to 'Pro'</ChecklistItem>
        </ul>
      </p>

      <Heading as="h3" size="md">
        At 10:20 - Resi should be streaming
      </Heading>
      <p>
        <ul>
          <ChecklistItem>
            Open 'Go Live' page from the YouTube Studio, click the schedule tab,
            click the live stream for today.
          </ChecklistItem>
          <ChecklistItem>Check stream audio on youtube</ChecklistItem>
          <ChecklistItem>Check stream audio on facebook</ChecklistItem>
        </ul>
      </p>

      <Heading as="h3" size="md">
        After Praise and Worship
      </Heading>
      <p>
        <ul>
          <ChecklistItem>Take out Words Key</ChecklistItem>
        </ul>
      </p>

      <Heading as="h3" size="md">
        After Service
      </Heading>
      <p>
        <ul>
          <ChecklistItem>
            Get audio file from soundboard for podcast
          </ChecklistItem>
          <ChecklistItem>Turn off monitors in av room</ChecklistItem>
          <ChecklistItem>Turn off cameras, and put lens caps on</ChecklistItem>
          <ChecklistItem>Turn off front screens and DSM</ChecklistItem>
        </ul>
      </p>
    </section>
  );
}

export default PreserviceChecklist;
