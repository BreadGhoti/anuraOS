class Taskbar {
  anElementYouWantToBind: HTMLElement;

  element = (
    <footer>
      <div bind:anElementYouWantToBind={this} id="launcher-button-container">
        <div id="launcher-button" onClick={() => { launcher.toggleVisible() }}></div>
      </div>
      {/* r58 i'm begging you please extract the asset for whatever this thing is or make an svg i don't feel like doing it and 1/2 stack was using a fucking image :skull: */}
      <nav>
        <ul>
          <li><input type="image" src="/assets/icons/chrome.svg" id="showDialog" onclick="openBrowser()" /></li >
          <li><input type="image" src="/assets/icons/linux.png" id="showDialog" onclick="openVMManager()" /></li>
          <li><input type="image" src="/assets/icons/settings.png" id="showDialog" onclick="openAppManager()" />
          </li>
        </ul >
      </nav >
    </footer >
  );
  constructor() {
    this.element.querySelector("#showDialog")!.addEventListener("click", () => {
      console.log("test")
    })

  }
  killself() {
    this.element.remove();
  }
}
