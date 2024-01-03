<template>
  <div>
    <div class="h-full min-w-full">
      <!--header content-->
      <div class="h-[180px] max-w-full bg-gray-100 flex justify-start">
        <div class="pt-12 pl-12">
          <div
            class="bg-gray-200 h-[50px] flex items-center shadow-sm px-[10px] w-full py-[10px] border-b"
          >
            <h3 class="ml-5 text-3xl font-bold">Produk</h3>
          </div>
        </div>
      </div>
    </div>

    <!--content-->
    <div class="h-full p-[25px] bg-white">
      <!--navbar-->
      <div class="h-[60px] flex relative">
        <div class="absolute pt-6 right-20">
          <div class="relative flex items-center w-full mb-5 bottom-2 right-4">
            <!--search box-->
            <input
              type="search"
              name="search"
              v-model="search"
              class="relative block w-[200px] min-w-[20px] bg-transparent flex-auto rounded-full border border-cyan-600 outline-none pl-5 focus:border-cyan-600 focus:text-gray-700 focus:cursor-text focus:pr-3 px-3 py-[0.25rem] text-gray-400 transition duration-200 ease-in-out focus:z-[3] dark:border-cyan-800 dark:text-neutral-200 dark:placeholder:text-gray-400 dark:focus:border-cyan-800"
              placeholder="Search..."
              aria-label="Search..."
              aria-describedby="button-addon3"
            />
            <!--Search button-->
            <button
              @click="handleClick"
              class="relative px-6 py-2 font-medium text-cyan-600 transition duration-150 ease-in-out border-none rounded-full hover:bg-cyan-800 hover:bg-opacity-7 hover:text-gray-600 focus:ring-2"
              type="button"
              id="button-addon3"
              data-te-ripple-init
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <!--tambah produk-->
            <button
              class="inline-flex items-center justify-center bg-cyan-600 px-[10px] ml-8 h-[35px] rounded-lg text-white text-sm font-bold hover:bg-cyan-800"
              v-on:click.prevent="onTambahProdukClick"
            >
              Tambah Produk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!--table produk-->
      <div class="border rounded-full">
        <div class="relative overflow-x-auto sm:rounded-lg">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead class="text-gray-800 uppercase bg-blue-200 text-md">
              <tr>
                <th scope="col" class="px-6 py-3">No</th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Nama Produk</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Nama Merek</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Link Website</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Aktif</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">Aksi</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in Produk"
                :key="index"
                class="text-gray-700 bg-white border-b"
              >
                <td class="px-6 py-4">{{ index + 1 }}</td>
                <td class="px-6 py-4">{{ item.namaProduk }}</td>
                <td class="px-6 py-4">{{ item.merk?.namaMerk }}</td>
                <td class="px-6 py-4">
                  <a
                    class="text-blue-500"
                    target="_black"
                    :href="item.linkWebsiteProduk"
                    >{{ item.linkWebsiteProduk }}
                  </a>
                </td>
                <td class="px-6 py-4">
                  <togglebutton
                    v-model="item.active"
                    @click="deactiveProduk(item.produkId)"
                  ></togglebutton>
                </td>
                <td class="py-2 px-4 border-b">
                  <!-- Tambahkan ikon di sini -->
                  <div class="relative inline-flex">
                    <router-link
                      id="editDealerButton"
                      class="text-sm text-gray-500 rounded-lg"
                      :to="{
                        name: 'editprodukmolis',
                        params: { id: item.produkId },
                      }"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 ml-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </router-link>
                    <button
                      @click="confirmDelete(item.produkId)"
                      class="text-red-500 hover:text-red-700"
                    >
                      <!-- Ikon kedua -->
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            v-if="showConfirm"
            class="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-50"
          >
            <div class="flex items-center justify-center min-h-screen">
              <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div
                class="relative p-6 m-4 bg-white rounded-xl shadow-lg w-[300px]"
              >
                <div class="mb-4">
                  <p class="mb-2 text-lg font-bold">Confirm Delete</p>
                  <p class="text-gray-600">
                    Are you sure you want to delete {{ Produk.namaProduk }}?
                  </p>
                </div>
                <div class="flex justify-center space-x-4">
                  <button
                    @click="deleteById()"
                    class="px-4 py-2 w-[100px] font-medium leading-normal text-white border-2 rounded-lg border-cyan-600 bg-cyan-500 hover:bg-cyan-700 hover:bg-opacity-100 hover:text-white focus:border-cyan-600 focus:text-gray-800 focus:outline-none focus:ring-0 active:border-cyan-600 active:text-gray-700"
                  >
                    Ya
                  </button>
                  <button
                    @click="cancelDelete()"
                    class="px-4 py-2 w-[100px] font-medium leading-normal border-2 rounded-lg border-cyan-500 text-cyan-600 hover:border-cyan-500 hover:bg-cyan-500 hover:bg-opacity-40 hover:text-white focus:border-cyan-600 focus:text-gray-800 focus:outline-none focus:ring-0 active:border-cyan-600 active:text-gray-700"
                  >
                    Batal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex justify-end text-gray-800">
          <button
            type="button"
            class="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
          >
            Previous
          </button>
          <button
            type="button"
            class="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
          >
            Next
          </button>
        </div>
        <div class="relative flex justify-start">
          <h3>page 1 of 10</h3>
        </div>
      </div>
    </div>
  </div>
  <!--main-->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showConfirm: false,
      deleteProdukId: null,
      Aktif: true,
      deleteNamaProduk: "",
      Produk: [],
      page: 0,
      rowsPerpage: 10,
      error: [],
      search: "",
    };
  },
  mounted() {
    this.fetchProduk();
  },

  watch: {
    search(newValue) {
      if (newValue === "") {
        this.fetchProduk();
      }
    },
  },

  methods: {
    onTambahProdukClick() {
      this.$router.push({ path: "/tambahproduk" });
    },
    async fetchProduk() {
      try {
        const response = await axios.get(
          "https://molis-production.up.railway.app/api/produk/active"
        );
        this.Produk = response.data;
      } catch (error) {
        console.error("Failed to fetch Produk:", error);
      }
    },
    confirmDelete(id) {
      this.deleteProdukId = id;
      this.showConfirm = true;
    },
    cancelDelete() {
      this.showConfirm = false;
      this.deleteProdukId = null;
    },
    async deactiveProduk(id) {
      try {
        const response = await axios.put(
          `https://molis-production.up.railway.app/api/produk/toggleStatus/${id}/deactivate`
        );
        console.log(response);
        this.fetchProduk();
      } catch (error) {
        console.error("gagal deactive produk:", error);
      }
    },
    async deleteById() {
      try {
        const response = await axios.delete(
          `https://molis-production.up.railway.app/api/produk/delete/${this.deleteProdukId}`
        );
        console.log(response);
        this.fetchProduk();
        this.showConfirm = false;
      } catch (error) {
        console.error("Failed to fetch Produk:", error);
      }
    },
    async getFindByName() {
      try {
        const response = await axios.get(
          `https://molis-production.up.railway.app/api/produk/findByName?namaProduk=${this.search}`
        );
        this.Produk = [];
        this.Produk.push(response.data);
      } catch (error) {
        console.error("Failed to fetch Produk:", error);
      }
    },
    handleClick() {
      this.getFindByName();
    },
  },
};
</script>

<style>
/* Toggle A */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: rgb(96, 164, 198);
}

/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: rgb(30, 141, 177);
}
</style>

<!-- <script>
import axios from "axios";
export default {
  data() {
    return {
      kolomSearch: "",
      Aktif: true,
      deleteNamaProduk: "",
      Produk: [],
      page: 0,
      rowsPerpage: 10,
      error: [],
      search: "",
    };
  },
  mounted() {
    this.fetchProduk();
  },

  watch: {
    search(newValue) {
      if (newValue === "") {
        this.fetchProduk();
      }
    },
  },

  methods: {
    onTambahProdukClick() {
      this.$router.push({ path: "/tambahProduk" });
    },
    async fetchProduk() {
      try {
        const response = await axios.get(
          "https://molis-production.up.railway.app/api/produk/active"
        );
        this.Produk = response.data;
      } catch (error) {
        console.error("Failed to fetch produk:", error);
      }
    },
    async deleteById(id) {
      try {
        const response = await axios.delete(
          `https://molis-production.up.railway.app/api/produk/delete/${id}`
        );
        console.log(response);
        this.fetchProduk();
      } catch (error) {
        console.error("Failed to fetch produk:", error);
      }
    },
    async getFindByName() {
      try {
        const response = await axios.get(
          `https://molis-production.up.railway.app/api/produk/findByName?namaProduk=${this.search}`
        );
        this.Produk = response.data;
      } catch (error) {
        console.error("Failed to fetch produk:", error);
      }
    },
    handleClick() {
      this.getFindByName();
      console.log(this.Produk);
    },
  },
};
</script> -->
