import config from './interns-list-config';
import {
  getRandomInt,
} from '../../javascripts/common/helper';

const { interns } = config;

const intermediateBanner = (count) => {
  const banner = `
  <div class="intermediate-banner">
    <h1>India's #1 <strong>Internship Portal</strong></h1>
    <img class="banner-image" src="../../images/clipart-man.png" alt="" />
  </div>
  `;

  return (count === 5) ? banner : '';
};

const loader = (internList, count) => {
  const banner = `
  <div class="loader">
    <span><i class="fas fa-spinner"></i> Showing 10 / 1223 Profiles</span>
  </div>
  `;

  return (count === (internList.length - 1)) ? banner : '';
};

const markup = `${interns.map((intern, count) => `
${intermediateBanner(count)}
<div class="profile-item ${intern.loading ? 'still-loading' : ''}">
  <div class="row">
    <div class="col-lg-6">
      <div class="intern">
        <img class="img-thumbnail" src="./images/photos/photo${getRandomInt(1, 8)}.jpg" alt="">
        <div class="intern-details">
          <h6 class="intern-name">${intern.name}</h6>
          <div class="description">
            <p>
              <span class="education">${intern.education}</span> | 
              <span class="college">
                <span class="name">${intern.collegeName}</span>,
                <span class="location">${intern.location}</span>
                <span class="score">${intern.score}</span> | 
              </span>
              <span class="interest">${intern.interest}</span>
            </p>
          </div>
        </div>

      </div>
    </div>
    <div class="col-lg-6">
      <div class="additional-attributes">
        <div class="skills">
          <h6>Skills Acquired</h6>
          <p>${intern.skills}</p>
        </div>

        <div class="btn-wrap">
          <button class="btn favourite ${intern.isFavourite ? 'active' : ''}"><i class="fas fa-star"></i></button>
          <a href="intern-details.html" class="btn btn-primary view-btn ${intern.isViewed ? 'visited' : ''}">${intern.isViewed ? 'Viewed' : 'View'}</a>
        </div>
      </div>
    </div>
  </div>
</div>
${loader(interns, count)}
`).join('')}`;

export {
  interns,
  markup,
};
