document.addEventListener('DOMContentLoaded', () => {
    const hardBtn = document.getElementById('hardSkillsBtn');
    const softBtn = document.getElementById('softSkillsBtn');
    const skillsCard = document.getElementById('skillsCard');
  
    if (!hardBtn || !softBtn || !skillsCard) return;
  
    hardBtn.addEventListener('click', () => {
      hardBtn.classList.add('active');
      softBtn.classList.remove('active');
      skillsCard.innerHTML = `
        <div class="project-content">
          <h3 class="project-title">Hard Skills</h3>
          <ul class="project-description">
            <li>HTML, CSS, JavaScript</li>
            <li>Figma & UI Design</li>
            <li>Lua (LOVE2D), Swift (Xcode)</li>
            <li>Git & GitHub</li>
            <li>Basic Firebase/Auth</li>
          </ul>
        </div>
      `;
    });
  
    softBtn.addEventListener('click', () => {
      softBtn.classList.add('active');
      hardBtn.classList.remove('active');
      skillsCard.innerHTML = `
        <div class="project-content">
          <h3 class="project-title">Soft Skills</h3>
          <ul class="project-description">
            <li>Team Communication</li>
            <li>Project Management</li>
            <li>Time Management</li>
            <li>Creative Problem-Solving</li>
            <li>Adaptability & Resilience</li>
          </ul>
        </div>
      `;
    });
  });
  