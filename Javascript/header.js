const template = document.createElement('template');

template.innerHTML = `
<!-- Header -->
<div class="TopImage">
    <img class="TopImageImage" src="Extras/Jaegernauts.png" alt="Jaegernauts Header">
</div>
<!-- Dropdown -->
<div class="MainHeader">
    <div class="HotlinksWithMenu">
        <div class="OuterDropdown">
            <img onclick="ToggleDropdown()" class="Dropdown" src="Extras/Menu.png">
        </div>
        <h3 onclick="Redirect('/index.html')" class="HomeTwo CurrentPage">Home</h3>
    </div>
    <!-- Hotlinks -->
    <div class="Hotlinks">
        <h3 class="Home Button" onclick="Redirect('index.html')">Home</h3>
        <div>
            <h3 class="OurTeamButton" onclick="Redirect('Pages/OurTeam.html')" onmouseenter="HoverDropdown(true, 'OurTeam')" onmouseleave="HoverDropdown(false, 'OurTeam')">Our Team</h3>
            <div class="OurTeam" id="OurTeam" onmouseenter="HoverDropdown(true, 'OurTeam')" onmouseleave="HoverDropdown(false, 'OurTeam')">
                <h3>Mentors</h3>
                <h3>Alumni</h3>
            </div>
        </div>
        <div>
            <h3 class="SponsorsButton" onclick="Redirect('Pages/Sponsors.html')" onmouseenter="HoverDropdown(true, 'Sponsors')" onmouseleave="HoverDropdown(false, 'Sponsors')">Sponsors</h3>
            <div class="Sponsors" id="Sponsors" onmouseenter="HoverDropdown(true, 'Sponsors')" onmouseleave="HoverDropdown(false, 'Sponsors')">
                <h3>CGT</h3>
                <h3>Texas Workforce</h3>
                <h3>Ventana</h3>
                <h3>Detex</h3>
                <h3>Premier Cabinets New Braunfels</h3>
                <h3>Sweet Bites</h3>
                <h3>Oak Ridge Bellows</h3>
            </div>
        </div>
        <div>
            <h3 class="ResourcesButton" onmouseenter="HoverDropdown(true, 'Resources')" onmouseleave="HoverDropdown(false, 'Resources')">Resources</h3>
            <div class="Resources" id="Resources" onmouseenter="HoverDropdown(true, 'Resources')"
                onmouseleave="HoverDropdown(false)">
                <h3 class="Build" onclick="Redirect('Pages/Build.html')">Build</h3>
                <h3 class="Design" onclick="Redirect('Pages/Design.html')">Design</h3>
                <h3 class="Marketing" onclick="Redirect('Pages/Marketing.html')">Marketing</h3>
                <h3 class="Programming" onclick="Redirect('Pages/Programming.html')">Programming</h3>
                <h3 class="API" onclick="Redirect('Pages/API.html')">API</h3>
            </div>
        </div>
    </div>
    <!-- Center Info -->
    <div class="InnerHeader">
        <h3 onclick="NewTab('https://registry.bestrobotics.org/')" class="BEST">BEST #0015</h3>
        <h1 onclick="Redirect('index.html')" class="TITLE">Jaegernauts</h1>
        <h3 onclick="NewTab('https://frc-events.firstinspires.org/team/5103')" class="FIRST">FIRST #5103</h3>
    </div>
    <!-- Socials -->
    <div class="Socials">
        <img src="Extras/Socials/Email.png">
        <img onclick="NewTab('https://github.com/Jaegernauts5103')" src="Extras/Socials/Github.png">
        <img src="Extras/Socials/X.png">
        <img onclick="NewTab('https://www.facebook.com/profile.php?id=61571562490888')" src="Extras/Socials/Facebook.png">
        <img src="Extras/Socials/Youtube.png">
        <img onclick="NewTab('https://www.instagram.com/mechsjaegernauts/?igsh=MXFyZTJzeGZwYjIxMg%3D%3D#')" src="Extras/Socials/Instagram.png">
    </div>
    <div class="SocialsCompressed">
        <h3 class="SocialsCompressedText">Socials</h3>
    </div>
</div>

<div class="InnerDropdown" id="InnerDropdown">
    <h3 onclick="Redirect('Pages/OurTeam.html')" class="DropdownText">Our Team</h3>
    <div class="Spacer"></div>
    <h3 onclick="Redirect('Pages/Sponsors.html')" class="DropdownText">Sponsors</h3>
    <div class="Spacer"></div>
    <h3 onclick="Redirect('Pages/API.html')" class="DropdownText">Resources</h3>
</div>
`;

document.body.prepend(template.content);
