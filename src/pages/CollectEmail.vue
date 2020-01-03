<template>
  <q-page>
    <div class="row justify-center full-width items-center">
      <div class="col-auto" justify-center>
        <h1>Enter your information!</h1>
        <amplify-connect :mutation="createAddUserInfoEntryMutation"
            @done="onCreateFinished">
          <template slot-scope="{ loading, mutate, errors }">
            <form class="1-pa-md">
              <div class="q-pa-md" style="max-width: 420px">
                <q-input type="text" ref="name" outline label="Name" clearable lazy-rules 
                   :rules="[ val => val && val.length > 0 || 'Missing Name']"
                   v-model="name" />
              
                <q-input type="text" ref="email" outline color="teal" label="Email" clearable lazy-rules  
                  :rules="[ val => val && val.length > 0 || 'Missing Email', val => testEmail(val) || 'Bad email format' ]"
                  v-model="email" />
              
                <q-input type="text" ref="phone" outline color="teal" label="Phone" clearable lazy-rules v-model="phone" />
              
              
                <q-input v-model="description" outline ref="description" color="teal" label="Description" clearable type="textarea"/>

                <q-option-group v-model="interests" :options="interestOptions" type="checkbox" />
            
                <button :disabled="loading" @click="mutate">Create Todo</button>
                <div v-show="errors"> Errors ={{ errors }}</div>
              </div>
            </form>

          </template>
        </amplify-connect>
       
        <div v-show="status">{{ status }}</div>
        <div v-show="error"> {{ error }}</div>
      </div>
    </div>
  </q-page>

</template>

<script>
  import { components } from 'aws-amplify-vue';
  import  { API, graphqlOperation } from "aws-amplify";
  import * as mutations from '../graphql/mutations';

//  const CreateUserInfoEntryMutation = mutations.createUserInfoEntry


export default {
  name: 'home',
  components: {
    ...components
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      description: '',
      interests: [],
      status: '',
      error: '',
      interestOptions: [ {
        label: 'Dating', 
        value: 'Dating'
      },
      {
        label: 'Friends',
        value: 'Friends'
      },
      {
        label: 'Bussiness',
        value: 'Bussiness'
      },
      {
        label: 'Happy Hour',
        value: 'Happy Hour'
      },
      {
        label: 'Dinning',
        value: 'Dinning'
      },
      {
        label: 'Biking',
        value: 'Biking'
      }
      ]
    }
  },
  computed: {
    formData() {
      let data = {
        name: this.name || null,
        email: this.email || null,
        phone: this.phone || null,
        description: this.description || null,
        interests: this.interests
      };
      console.log("FormData = ", data);
      return data;
    },
    createAddUserInfoEntryMutation() {
      let data = this.formData;
      console.log("In createUserInfoEntryMutation. data = ", data);
      return graphqlOperation(mutations.createUserInfoEntry, {input: data });
    }
  },
  methods: {
    async onSubmit() {
      let data = this.formData;
      console.log("In onSubmit. formData = ", data);
      let response = await API.graphql(graphqlOperation(mutations.createUserInfoEntry, {input: data}));
      console.log("Got graphQL response: ", response);
      this.status = response;

    },
    testEmail(value) {
      let pattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return pattern.test(value);
    },
     onCreateFinished() {
      console.log('Entry created!');
    }
  },
  beforeCreate() {
    console.log("mutation = ", mutations.createUserInfoEntry )
  }
};
</script>