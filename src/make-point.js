export default (data) => `<article class="trip-point">
          <i class="trip-icon">🚕</i>
          <h3 class="trip-point__title">${data.title}</h3>
          <p class="trip-point__schedule">
            <span class="trip-point__timetable">${data.time.timetable}</span>
            <span class="trip-point__duration">${data.time.duration}</span>
          </p>
          <p class="trip-point__price">${data.price}</p>
          <ul class="trip-point__offers">
            <li>
              <button class="trip-point__offer">Order UBER +&euro;&nbsp;20</button>
            </li>
            <li>
              <button class="trip-point__offer">Upgrade to business +&euro;&nbsp;20</button>
            </li>
          </ul>
        </article>`;
