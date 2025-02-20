const template = document.createElement('template');

template.innerHTML = `
<!-- Header -->
<div class="TopImage">
    <img class="TopImageImage" src="/Extras/Jaegernauts.png" alt="Jaegernauts Header">
</div>
<!-- Dropdown -->
<div class="MainHeader">
    <div class="HotlinksWithMenu">
        <div class="OuterDropdown">
            <img onclick="ToggleDropdown()" class="Dropdown" src="/Extras/Menu.png">
        </div>
        <h3 onclick="Redirect('/index.html')" class="HomeTwo CurrentPage">Home</h3>
    </div>
    <!-- Hotlinks -->
    <div class="Hotlinks">
        <h3 class="Home Button" onclick="Redirect('/index.html')">Home</h3>
        <div class="DropdownContainer">
            <h3 class="OurTeamButton" onclick="Redirect('/Pages/OurTeam.html')" onmouseenter="HoverDropdown(true, 'OurTeam')" onmouseleave="HoverDropdown(false, 'OurTeam')">Our Team</h3>
            <div class="OurTeam" id="OurTeam" onmouseenter="HoverDropdown(true, 'OurTeam')" onmouseleave="HoverDropdown(false, 'OurTeam')">
                <h3 class="Mentors drop" onclick="Redirect('/Pages/OurTeam/Mentors.html')">Mentors</h3>
                <h3 class="Alumni  drop" onclick="Redirect('/Pages/OurTeam/Alumni.html')">Alumni</h3>
            </div>
        </div>
        <div class="DropdownContainer">
            <h3 class="SponsorsButton" onclick="Redirect('/Pages/Sponsors.html')" onmouseenter="HoverDropdown(true, 'Sponsors')" onmouseleave="HoverDropdown(false, 'Sponsors')">Sponsors</h3>
            <div class="Sponsors" id="Sponsors" onmouseenter="HoverDropdown(true, 'Sponsors')" onmouseleave="HoverDropdown(false, 'Sponsors')">
                <h3 class="CGT drop" onclick="Redirect('/Pages/Sponsors/CGT.html')">CGT</h3>
                <h3 class="TexasWorkforce drop" onclick="Redirect('/Pages/Sponsors/TexasWorkforce.html')">Texas Workforce</h3>
                <h3 class="Ventana drop" onclick="Redirect('/Pages/Sponsors/Ventana.html')">Ventana</h3>
                <h3 class="Detex drop" onclick="Redirect('/Pages/Sponsors/Detex.html')">Detex</h3>
                <h3 class="Premier drop" onclick="Redirect('/Pages/Sponsors/PremierCabinetsNewBraunfels.html')">Premier Cabinets New Braunfels</h3>
                <h3 class="SweetBites drop" onclick="Redirect('/Pages/Sponsors/SweetBites.html')">Sweet Bites</h3>
                <h3 class="OakRidge drop" onclick="Redirect('/Pages/Sponsors/OakRidgeBellows.html')">Oak Ridge Bellows</h3>
            </div>
        </div>
        <div class="DropdownContainer">
            <h3 class="ResourcesButton" onmouseenter="HoverDropdown(true, 'Resources')" onmouseleave="HoverDropdown(false, 'Resources')">Resources</h3>
            <div class="Resources" id="Resources" onmouseenter="HoverDropdown(true, 'Resources')"
                onmouseleave="HoverDropdown(false, 'Resources')">
                <h3 class="Build drop" onclick="Redirect('/Pages/Resources/Build.html')">Build</h3>
                <h3 class="Design drop" onclick="Redirect('/Pages/Resources/Design.html')">Design</h3>
                <h3 class="Marketing drop" onclick="Redirect('/Pages/Resources/Marketing.html')">Marketing</h3>
                <h3 class="Programming drop" onclick="Redirect('/Pages/Resources/Programming.html')">Programming</h3>
                <h3 class="API drop" onclick="Redirect('/Pages/Resources/API.html')">API</h3>
            </div>
        </div>
    </div>
    <!-- Center Info -->
    <div class="InnerHeader">
        <h3 onclick="NewTab('https://registry.bestrobotics.org/')" class="BEST">BEST #0015</h3>
        <h1 onclick="Redirect('/index.html')" class="TITLE">Jaegernauts</h1>
        <h3 onclick="NewTab('https://frc-events.firstinspires.org/team/5103')" class="FIRST">FIRST #5103</h3>
    </div>
    <!-- Socials -->
    <div class="Socials">
        <img src="/Extras/Socials/Email.png">
        <img onclick="NewTab('https://github.com/Jaegernauts5103')" src="/Extras/Socials/Github.png">
        <img src="/Extras/Socials/X.png">
        <img onclick="NewTab('https://www.facebook.com/profile.php?id=61571562490888')" src="/Extras/Socials/Facebook.png">
        <img src="/Extras/Socials/Youtube.png">
        <img onclick="NewTab('https://www.instagram.com/mechsjaegernauts/?igsh=MXFyZTJzeGZwYjIxMg%3D%3D#')" src="/Extras/Socials/Instagram.png">
    </div>
    <div class="SocialsCompressed">
        <h3 class="SocialsCompressedText">Socials</h3>
    </div>
</div>

<div class="InnerDropdown" id="InnerDropdown">
    <h3 onclick="Redirect('/Pages/OurTeam.html')" class="DropdownText">Our Team</h3>
    <div class="Spacer"></div>
    <h3 onclick="Redirect('/Pages/Sponsors.html')" class="DropdownText">Sponsors</h3>
    <div class="Spacer"></div>
    <h3 onclick="Redirect('/Pages/API.html')" class="DropdownText">Resources</h3>
</div>
`;

document.body.prepend(template.content);
