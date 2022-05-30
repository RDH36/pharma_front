PartiesTables 

    
    -TableHeader.js // titre des tables // utilisé dans TableauProdPharma.js

    -RowProduits.js //ligne de produits // utilisé dans TableauProdPharma.js
        -FirstColumn.js // Premiere colonne ecriture en gras
        -TableBody.js //Les autres colonne texte pas gras




    <div class="py-12 px-4">
    <div class="bg-white lg:max-w-[384px] md:max-w-[720px] w-full shadow rounded mx-auto pb-10 px-6 ">

        <div class=" flex justify-start items-center py-7 relative">
            <input class="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none" type="text" placeholder="Search">
            <svg class="absolute right-3 z-10 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#4B5563" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 21L15 15" stroke="#4B5563" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </div>
        <hr class="border-gray-100">
        <div class="mt-7 relative">
        <p class="text-sm text-left font-medium leading-none text-gray-800 mb-3">Team Name</p>
        <div class=" flex justify-start items-center ">
            <input class="text-sm leading-none text-left text-gray-600 px-4 py-3  w-full border rounded border-gray-300 relative outline-none" type="text" placeholder="For example “Alpha”">
       
        </div>
        </div>
        
        <div class="mt-8 ">
            <label class="text-sm text-left font-medium leading-none text-gray-800 ">Team Type</label>
            
            <div
            class="dropdown-one border rounded border-gray-300 w-full rounded outline-none   relative mt-2"
          >
            <button
              onclick="showDropDownMenu(this)"
              class="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full"
            >
              <span
                class="pr-4 font-medium text-gray-600 text-sm"
                id="drop-down-content-setter"
              >
              Beginner
              </span>
              <svg  class="absolute right-5 z-10 cursor-pointer" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#4B5563" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

            <div
              class="hidden rounded w-full shadow border-t border-gray-200 px-1 py-2 absolute top-12 right-0 bg-white"
              id="drop-down-div"
            >
              <a href="javascript:void(0)" class="hover"
                ><p
                  class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded cursor-pointer"
                  onclick="swaptext(this)"
                >
                Beginner
                </p></a
              >
              <a href="javascript:void(0)"
                ><p
                  class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded cursor-pointer"
                  onclick="swaptext(this)"
                >
                Intermediate
                </p></a
              >
              <a href="javascript:void(0)"
                ><p
                  class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded cursor-pointer"
                  onclick="swaptext(this)"
                >
                Expert
                </p></a
              >
             
            </div>
          </div>



            <!-- end -->
            </div>
            <div class="mt-8 w-full ">
                <label class="text-sm text-left font-medium leading-none text-gray-800">Team Size</label>
                <div class="flex justify-start items-center mt-2">
                <div class="flex justify-between  items-center w-full border rounded border-gray-300 md:px-6 px-3 py-1 lg:gap-x-2 md:gap-x-2 gap-x-2">
                <button class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:text-indigo-700 hover:rounded focus:bg-indigo-100 focus:text-indigo-700 focus:rounded w-[60px]">1-5</button>
                <button class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:text-indigo-700 hover:rounded focus:bg-indigo-100 focus:text-indigo-700 focus:rounded w-[60px]">5-10</button>
                <button class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:text-indigo-700 hover:rounded focus:bg-indigo-100 focus:text-indigo-700 focus:rounded w-[60px]">10-15</button>
                <button class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:text-indigo-700 hover:rounded focus:bg-indigo-100 focus:text-indigo-700 focus:rounded w-[60px]">15+</button>
                </div>
            </div>
                </div>
        
        
                <div class="mt-8 ">
                    <label class="text-sm text-left font-medium leading-none text-gray-800 ">Amount</label>
                
                    <div
                    class="flex items-center border border-slate-300 px-4 py-3 rounded mt-2"
                  >
                    <div class="svg-container" onclick="minusme(this)">
                      <svg
                        class="hover:bg-gray-100 cursor-pointer rounded-full"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
                          stroke="#475569"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M15.75 12H8.25"
                          stroke="#475569"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="dollar-container pl-4">
                      <p class="text-sm leading-none text-slate-600 pr-1">$</p>
                    </div>
                    <div
                      class="text-container w-full text-sm leading-none text-slate-600"
                    >
                      1000
                    </div>
                    <div class="svg-container" onclick="plusme(this)">
                      <svg
                        class="hover:bg-gray-100 cursor-pointer rounded-full"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
                          stroke="#475569"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M12 8.25V15.75"
                          stroke="#475569"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.75 12H8.25"
                          stroke="#475569"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>



                    <div class="mt-8 ">
                        <label class="text-sm text-left font-medium leading-none text-gray-800">Category</label>
                      
                        <div
                        class="dropdown-one border rounded border-gray-300 w-full rounded outline-none   relative mt-2"
                      >
                        <button
                          onclick="showDropDownMenuOne(this)"
                          class="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full"
                        >
                          <span
                            class="pr-4 font-medium text-gray-600 text-sm"
                            id="drop-down-content-setter-one"
                          >
                          Q/A 
                          </span>
                          <svg  class="absolute right-5 z-10 cursor-pointer" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#4B5563" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
            
                        <div
                          class="hidden rounded w-full shadow border-t border-gray-200 px-1 py-2 absolute top-12 right-0 bg-white z-20"
                          id="drop-down-div-one"
                        >
                          <a href="javascript:void(0)" class="hover"
                            ><p
                              class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded cursor-pointer"
                              onclick="swaptextone(this)"
                            >
                            Q/A 
                            </p></a
                          >
                          <a href="javascript:void(0)"
                            ><p
                              class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded cursor-pointer"
                              onclick="swaptextone(this)"
                            >
                            Designing
                            </p></a
                          >
                          <a href="javascript:void(0)"
                            ><p
                              class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded cursor-pointer"
                              onclick="swaptextone(this)"
                            >
                            Developement
                            </p></a
                          >
                          <a href="#"
                          ><p
                            class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded cursor-pointer"
                            onclick="swaptextone(this)"
                          >
                          Marketing
                          </p></a
                        >
                        <a href="#"
                        ><p
                          class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded cursor-pointer"
                          onclick="swaptextone(this)"
                        >
                        Business Developement
                        </p></a
                      >
                        </div>
                      </div>
                        </div>
        
                        <div class="mt-8">
                            <label class="text-sm text-left font-medium leading-none text-gray-800">Group Type</label>
                          
                            <div
                        class="dropdown-one border rounded border-gray-300 w-full rounded outline-none   relative mt-2"
                      >
                        <button
                          onclick="showDropDownMenuTwo(this)"
                          class="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full"
                        >
                          <span
                            class="pr-4 font-medium text-gray-600 text-sm"
                            id="drop-down-content-setter-two"
                          >
                          All
                          </span>
                          <svg  class="absolute right-5 z-10 cursor-pointer" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#4B5563" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
            
                        <div
                          class="hidden rounded w-full shadow border-t border-gray-200 px-1 py-2 absolute top-12 right-0 bg-white z-10"
                          id="drop-down-div-two"
                        >
                          <a href="javascript:void(0)" class="hover"
                            ><p
                              class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded cursor-pointer"
                              onclick="swaptexttwo(this)"
                            >
                            All
                            </p></a
                          >
                          <a href="javascript:void(0)"
                            ><p
                              class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded cursor-pointer"
                              onclick="swaptexttwo(this)"
                            >
                            Users
                            </p></a
                          >
                          <a href="javascript:void(0)"
                            ><p
                              class="text-sm leading-none text-gray-600 p-3 hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded cursor-pointer"
                              onclick="swaptexttwo(this)"
                            >
                            Orders
                            </p></a
                          >
                         
                        </div>
                      </div>
                            </div>
        
                        <div class="lg:flex justify-end mr-1 items-center gap-x-3 mt-12 lg:block md:hidden hidden">
                            <button class="text-sm font-medium leading-none text-center text-indigo-700 px-6 py-4 border rounded-md border-indigo-700  hover:bg-gray-100 transform duration-300 ease-in-out">Cancel</button>

                            <button class="text-sm font-medium leading-none text-white text-center  px-6 py-4 bg-indigo-700 rounded-md  hover:bg-indigo-600 transform duration-300 ease-in-out">Search</button>
                        </div>

                        <div class="space-y-4 mt-12 lg:hidden md:block block">
                            <button class="text-sm font-medium leading-none text-center text-indigo-700 w-full px-6 py-4 border rounded-md border-indigo-700  hover:bg-gray-100 transform duration-300 ease-in-out">Cancel</button>

                            <button class="text-sm font-medium leading-none text-white text-center w-full px-6 py-4 bg-indigo-700 rounded-md  hover:bg-indigo-600 transform duration-300 ease-in-out">Search</button>
                        
                        </div>



            </div>
            </div>

            </div>








