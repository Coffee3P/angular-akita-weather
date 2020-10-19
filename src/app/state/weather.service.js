import { weatherStore } from './weather.store';

export async function update(id, data) {
  await Promise.resolve();
  weatherStore.update(id, data);
}

export async function remove(id) {
  await Promise.resolve();
  weatherStore.remove(id);
}
