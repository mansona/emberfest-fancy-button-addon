import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | basic test', function (hooks) {
  setupApplicationTest(hooks);

  test('renders our fancy button', async function (assert) {
    await visit('/');

    assert.dom('h1').hasText('My fancy button addon');
  });
});
