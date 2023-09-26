<script setup>

import {ref} from 'vue'

const header = ref('Furniture Pro Ltd')

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

const submitForm = ()=>{
    submitted.value = true;
}

const messages = ref([]);
const newMessage = ref('');

const sendMessage = ()=>{
    if (newMessage.value.trim() === '1') {
        messages.value.push({ text: newMessage.value, type: 'user'});
        messages.value.push({ text: 'To know more about our products and pricing, please call on +230 58963311 and we will be pleased the send you a quotation for our products', type:'bot'});
        newMessage.value = '';
    }
    else if (newMessage.value.trim() === '3') {
        messages.value.push({ text: newMessage.value, type: 'user'});
        messages.value.push({ text: 'For any more queries, please call on +230 58963311 and we will direct you to one of our staff who will answer your query', type:'bot'});
        newMessage.value = '';
    }
    else if (newMessage.value.trim() === '2') {
        messages.value.push({ text: newMessage.value, type: 'user'});
        messages.value.push({ text: 'For services of customer after sale, please call on +230 58963311 and we will direct you to one of our staff who will answer your query', type:'bot'});
        newMessage.value = '';
    }
    else if (newMessage.value.trim() !== '1' || newMessage.value.trim() !== '2' || newMessage.value.trim !== '3') {
        messages.value.push({ text: newMessage.value, type: 'user' });
        // Simulate a response from the bot (replace with your actual bot logic)
        messages.value.push({ text: 'Please select a number from the list below.', type: 'bot' });
        messages.value.push({ text: '1. Products', type: 'bot'});
        messages.value.push({ text: '2. Customer service after sale', type: 'bot'});
        messages.value.push({ text: '3. Other query', type: 'bot'});
        newMessage.value = ''; // Clear the input field
    }
}

</script>

<template>
    <nav>
        <ul class="menu">
            <li class="item"><a href="#">Home</a></li>
            <li class="item"><a href="#">Bio</a></li>
            <li class="item"><a href="#">Creations</a></li>
            <li class="item"><a href="#">Contact</a></li>
            <li class="toggle"><span class="bars"></span></li>
        </ul>
    </nav>

    <hr>
    <div class="scroller">
      <section id="home">
          <div>
              <h2 class="title part1">{{ header }}</h2> 
          </div>
          <br><br><br><br><br><br>
                            
        <div class="text">
            <p>In this modern era, where the world is turning to aluminium based furnitures</p>
            <br>
            <p> We offer the best quality wooden decor, cabinetry, table and fitment while guaranteeing the cheapest price</p>
            <br>
            <p>Our goal is to make your vision a reality and scale your business onto the internet.</p>
        </div>
      </section>  
      <section id="subscribe">
        <br>
        <br>
        <h1 class="title">Subscribe to this website.</h1>
        <br>
        <br>
        <p class="text subscribe">Before leaving this website, it would be great if you could leave a comment below and subscribe to our website to receive latest deals and to check out the newest furniture pro creations</p>
        <form class="text subscribe" @submit.prevent="submitForm" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" name="name" required><br><br>

            <label for="email">Email:</label><br>
            <input type="email" id="email" v-model="email" name="email" required><br><br>

            <label for="message">Message:</label><br>
            <textarea id="message" v-model="message" row="4" cols="50" name="message" required></textarea><br><br>

            <label for="subscribe">Subscribe to Website:</label>
            <input type="checkbox" id="subscribe" v-model="subscribe" name="subscribe"><br><br>

            <button class="btn btn-primary" type="submit" name="submit">Submit</button>
        </form>

        <div v-if="submitted">
            <h2>Submitted Data:</h2>
            <p><strong>Name:</strong> {{ name }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
            <p><strong>Message:</strong> {{ message }}</p>
            <p><strong>Subscribed:</strong> {{ subscribe ? 'Yes' : 'No' }}</p>
        </div>

        <br>
        <br>

        <div class="chat-container">
            <div class="chat-messages">
                <div v-for="message in messages" :key="message.id" :class="message.type">
                    {{ message.text }}
                </div>
            </div>
            <div class="chat-input">
                <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Hi how can I help you?">
            </div>
        </div>
        
      </section>
  
      <section id="myCreations">
  
      </section>
      
    </div>

</template>