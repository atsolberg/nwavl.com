import React from "react";

import A from "../link/A";
import ChecklistItem from "../checklist-item/ChecklistItem";
import Heading from "../heading/Heading";

function PreserviceChecklist() {
  return (
    <section>
      <ul>
        <ChecklistItem>Pre-service audio works</ChecklistItem>
        <ChecklistItem>
          PC OBS has an audio level (FOH audio source is set to 'Output &
          Monitor')
        </ChecklistItem>
        <ChecklistItem>
          ATEM has an audio level on 'NDI' Channel, Only 'NDI' is ON
        </ChecklistItem>
        <ChecklistItem>Scriptures key works</ChecklistItem>
        <ChecklistItem>Words key works</ChecklistItem>
        <ChecklistItem>
          Make sure podcast backup audio stick is plugged in
        </ChecklistItem>
        <ChecklistItem>
          Edit YouTube stream title, description, thumbnail, get from{" "}
          <A target="_blank" href="https://www.dropbox.com">
            dropbox
          </A>
          <p>
            <ul>
              <li>
                Dropbox login - <b>northwest@lwcc.org</b> //{" "}
                <b>920175thAvenueNorth</b>
              </li>
              <li>
                Description -{" "}
                <A
                  target="_blank"
                  href="https://www.dropbox.com/home/Northwest%20Services/Main/Stream%20Info"
                >
                  Stream Info
                </A>
              </li>

              <li>
                Thumbnail -{" "}
                <A
                  target="_blank"
                  href="https://www.dropbox.com/home/Northwest%20Services/Main/2022"
                >
                  2022
                </A>{" "}
                \ the current series folder \ "Message Graphics" folder
              </li>
              <li>
                YouTube login - <b>northwest.lw@gmail.com</b> //{" "}
                <b>NorthwestRogers18</b>
              </li>
              <li>- 'Go Live', edit stream settings</li>
              <li>- Update the title</li>
              <li>
                - Update description: delete the upper service-specific part of
                the description from last week, leave the general info
              </li>
              <li>- Update thumbnail</li>
            </ul>
            <br />
          </p>
        </ChecklistItem>
      </ul>

      <Heading as="h3" size="md">
        At 10:25
      </Heading>
      <p>
        <ul>
          <ChecklistItem>Check camera/director comms</ChecklistItem>
          <ChecklistItem>
            Make sure pre-service audio is running instead of live feed
          </ChecklistItem>
          <ChecklistItem>Set StreamDeck program to 'Pro'</ChecklistItem>
          <ChecklistItem>
            Open 'Go Live' page from the YouTube Studio
          </ChecklistItem>
          <ChecklistItem>Start recording in OBS</ChecklistItem>
          <ChecklistItem>Start stream in OBS</ChecklistItem>
          <ChecklistItem>Check stream audio on YouTube phone app</ChecklistItem>
        </ul>
      </p>

      <Heading as="h3" size="md">
        At 10:30
      </Heading>

      <p>
        <ul>
          <ChecklistItem>Take out pre-service audio</ChecklistItem>
          <ChecklistItem>Fade to Camera from Pro</ChecklistItem>
          <ChecklistItem>Key in Words</ChecklistItem>
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
    </section>
  );
}

export default PreserviceChecklist;
