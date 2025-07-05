import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ecommerce from '../../assets/ecommerce.png';
import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/musharaf19/Gym_Management_System.git"
          h3="Gym Managment System"
        />
        <ProjectCard
          src={ecommerce}
          link="https://github.com/musharaf19/E-Commerce.git"
          h3="BuyBuddy"
        />
      </div> 
    </section>
  );
}
export default Projects;
