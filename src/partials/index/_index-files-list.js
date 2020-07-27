import config from './_index-files-config';

const { links } = config;

const getStatus = (status) => {
  status.toLowerCase();
  switch (status) {
    case 'not Done':
      return '<span class="badge badge-pill badge-info">Not Done</span>';

    case 'in-progress':
      return '<span class="badge badge-pill badge-warning">In-progress</span>';

    case 'completed':
      return '<span class="badge badge-pill badge-success">Completed</span>';

    case 'ready':
      return '<span class="badge badge-pill badge-success">Ready</span>';

    case 'not ready':
      return '<span class="badge badge-pill badge-light">Not Ready</span>';

    default:
      return '<span class="badge badge-pill badge-info">Not Done</span>';
  }
};

const markup = `${links.map((link) => `
<a href="${link.url}" class="list-group-item list-group-item-action flex-column align-items-start">
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1" style="color: #1d3b70">${link.pageName}</h5>
    <small>${getStatus(link.overall)}</small>
  </div>
  <p class="mb-1" style="color: #5a7097; font-size: 0.9rem">${link.description}</p>
  <small>
    Dev:${getStatus(link.dev)}
    Review:${getStatus(link.review)}
  </small>
</a>
`).join('')}`;

export {
  links,
  markup,
};
