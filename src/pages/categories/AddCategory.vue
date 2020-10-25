<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-4-desktop">
        <form @submit.prevent="handleSubmit">
          <h1 class="title">Add New Category</h1>
          <!-- Category Name -->
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                name="name"
                placeholder="Enter Category Name"
                v-model="category.name"
              />
            </div>
          </div>

          <!-- Submit -->
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
            <div class="control">
              <button class="button is-light" type="button">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { addCategory } from '../../services/books';

export default {
  name: "AddCategory",
  data() {
    return {
      category: { name: '' },
    };
  },
  methods: {
    async handleSubmit() {
      console.log(this.category.name);

      try {
        const res = await addCategory(this.category.name);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
