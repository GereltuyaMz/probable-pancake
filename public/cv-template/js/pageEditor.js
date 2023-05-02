function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

function attachPageListeners() {
  //--------------------Declarations---------------------------//
  const pageEditorContainer = document.querySelector(".page-editor-container");

  const pageEditorHomepage = document.querySelector(".page-editor-homepage");
  const pageEditorNavBar = document.querySelector(".page-editor-nav-bar");
  const pageEditorDesign = document.querySelector(".page-editor-design");
  const pageEditorSocial = document.querySelector(".page-editor-social");

  const pageEditorHomepageContent = document.querySelector(
    ".page-editor-homepage-content"
  );
  const pageEditorNavBarContent = document.querySelector(
    ".page-editor-nav-bar-content"
  );
  const pageEditorDesignContent = document.querySelector(
    ".page-editor-design-content"
  );
  const pageEditorSocialContent = document.querySelector(
    ".page-editor-social-content"
  );
  const pageEditorNavBarContentHome = document.querySelector(
    ".page-editor-nav-bar-content-home"
  );
  const pageEditorNavBarContentProducts = document.querySelector(
    ".page-editor-nav-bar-content-products"
  );
  const pageEditorNavBarContentAboutUs = document.querySelector(
    ".page-editor-nav-bar-content-about-us"
  );
  const pageEditorNavBarContentEducation = document.querySelector(
    ".page-editor-nav-bar-content-education"
  );
  const pageEditorNavBarContentContacts = document.querySelector(
    ".page-editor-nav-bar-content-contacts"
  );

  const pageEditorHomepageContentText = document.querySelector(
    ".page-editor-homepage-content-text"
  );

  const headerNavBarHome = document.querySelector(".header-nav-bar-home");
  const headerNavBarProducts = document.querySelector(
    ".header-nav-bar-products"
  );
  const headerNavBarAboutUs = document.querySelector(
    ".header-nav-bar-about-us"
  );
  const headerNavBarContacts = document.querySelector(
    ".header-nav-bar-contacts"
  );
  const headerNavBarEducation = document.querySelector(
    ".header-nav-bar-education"
  );

  const productsH2 = document.querySelector(".products-h2");
  const aboutH2 = document.querySelector(".about-h2");
  const contactH2 = document.querySelector(".contact-h2");

  const selectEditableContent = document.querySelectorAll(
    ".select-editable-content"
  );

  const backgroundColorChoices = document.querySelector(
    ".background-color-choices"
  );

  const pageEditorDesignContentText1 = document.querySelector(
    ".page-editor-design-content-text1"
  );
  const pageEditorDesignContentText2 = document.querySelector(
    ".page-editor-design-content-text2"
  );

  const backGroundColorChoice1 = document.querySelector(
    ".background-color-choices div:nth-child(1)"
  );
  const backGroundColorChoice2 = document.querySelector(
    ".background-color-choices div:nth-child(2)"
  );
  const backGroundColorChoice3 = document.querySelector(
    ".background-color-choices div:nth-child(3)"
  );
  const backGroundColorChoice4 = document.querySelector(
    ".background-color-choices div:nth-child(4)"
  );

  const baseColorChoice1 = document.querySelector(
    ".base-color-choices div:nth-child(1)"
  );
  const baseColorChoice2 = document.querySelector(
    ".base-color-choices div:nth-child(2)"
  );
  const baseColorChoice3 = document.querySelector(
    ".base-color-choices div:nth-child(3)"
  );
  const baseColorChoice4 = document.querySelector(
    ".base-color-choices div:nth-child(4)"
  );
  const backGroundImgChoice1 = document.querySelector(
    ".background-img-choices div:nth-child(1)"
  );
  const backGroundImgChoice2 = document.querySelector(
    ".background-img-choices div:nth-child(2)"
  );
  const backGroundImgChoice3 = document.querySelector(
    ".background-img-choices div:nth-child(3)"
  );
  const backGroundImgChoice4 = document.querySelector(
    ".background-img-choices div:nth-child(4)"
  );

  const hasBackgroundColor = document.querySelectorAll(".has-background-color");
  const hasBaseColor = document.querySelectorAll(".has-base-color");
  const hasBackgroundImg = document.querySelectorAll(".has-background-img");
  const inputA = document.querySelectorAll(".input-a");

  const addBtn = document.querySelector(".add-btn");

  const deleteBtn = document.querySelectorAll(".del-btn");

  const fontColorEditDesign = document.querySelectorAll(".fontColor");
  const textColorEdit = document.querySelectorAll(".textColor");

  const fontColor1 = document.querySelector(
    ".font-color-choices div:nth-child(1)"
  );
  const fontColor2 = document.querySelector(
    ".font-color-choices div:nth-child(2)"
  );
  const fontColor3 = document.querySelector(
    ".font-color-choices div:nth-child(3)"
  );
  const fontColor4 = document.querySelector(
    ".font-color-choices div:nth-child(4)"
  );

  const textColor1 = document.querySelector(
    ".text-color-choices div:nth-child(1)"
  );
  const textColor2 = document.querySelector(
    ".text-color-choices div:nth-child(2)"
  );
  const textColor3 = document.querySelector(
    ".text-color-choices div:nth-child(3)"
  );
  const textColor4 = document.querySelector(
    ".text-color-choices div:nth-child(4)"
  );
  const hasFontChange = document.querySelectorAll(".font-change");
  const fontEditor = document.querySelector(".font-editor");
  const fontEditorDesign = document.querySelector(".font-editor-design");

  const fontDesignChoice1 = document.querySelector(
    ".font-editor-choices div:nth-child(1)"
  );
  const fontDesignChoice2 = document.querySelector(
    ".font-editor-choices div:nth-child(2)"
  );
  const fontDesignChoice3 = document.querySelector(
    ".font-editor-choices div:nth-child(3)"
  );
  const fontDesignChoice4 = document.querySelector(
    ".font-editor-choices div:nth-child(4)"
  );


  const toggleButtonFacebook = document.querySelector(
    ".toggle-button-facebook"
  );
  const toggleButtonInstagram = document.querySelector(
    ".toggle-button-instagram"
  );
  const toggleButtonLinkedin = document.querySelector(
    ".toggle-button-linkedin"
  );
  const toggleButtonYoutube = document.querySelector(".toggle-button-youtube");

  const pageSocialIconFacebook = document.querySelector(
    ".page-social-icon-facebook"
  );
  const pageSocialIconInstagram = document.querySelector(
    ".page-social-icon-instagram"
  );
  const pageSocialIconLinkedin = document.querySelector(
    ".page-social-icon-linkedin"
  );
  const pageSocialIconYoutube = document.querySelector(
    ".page-social-icon-youtube"
  );

  const slider = document.querySelector('.slider');



  const fontSizeEditor = document.querySelectorAll('.font-size');










  var selectedMenu = null;

  var dm = document.getElementById("dragme");
  dm.addEventListener("dragstart", drag_start, false);
  document.body.addEventListener("dragover", drag_over, false);
  document.body.addEventListener("drop", drop, false);

  //--------------------Event Listeners---------------------------//
  // pageEditorContainer.addEventListener("mouseout", function (e) {
  //   selectedMenu.style.display = "none";
  // });

  pageEditorHomepage.addEventListener("mousemove", function (e) {
    if (selectedMenu) {
      selectedMenu.style.display = "none";
    }
    selectedMenu = pageEditorHomepageContent;

    pageEditorHomepageContent.style.display = "flex";
  });
  pageEditorNavBar.addEventListener("mousemove", function (e) {
    if (selectedMenu) {
      selectedMenu.style.display = "none";
    }
    selectedMenu = pageEditorNavBarContent;
    pageEditorNavBarContent.style.display = "flex";
  });
  pageEditorNavBar.addEventListener("keyup", function (e) {
    var headerNavBarNew = document.querySelectorAll(".header-nav-bar-new");
    var pageEditorNavBarContentNew = document.querySelectorAll(
      ".page-editor-nav-bar-content-new"
    );
    headerNavBarHome.innerText = pageEditorNavBarContentHome.value;
    headerNavBarProducts.innerText = pageEditorNavBarContentProducts.value;
    headerNavBarEducation.innerText = pageEditorNavBarContentEducation.value;
    headerNavBarAboutUs.innerText = pageEditorNavBarContentAboutUs.value;
    headerNavBarContacts.innerText = pageEditorNavBarContentContacts.value;

    for (var i = 0; i < headerNavBarNew.length; i++)
      headerNavBarNew[i].innerText = pageEditorNavBarContentNew[i].value;
  });

  pageEditorDesign.addEventListener("mousemove", function (e) {
    if (selectedMenu) {
      selectedMenu.style.display = "none";
    }
    selectedMenu = pageEditorDesignContent;

    pageEditorDesignContent.style.display = "flex";
  });
  pageEditorSocial.addEventListener("mousemove", function (e) {
    if (selectedMenu) {
      selectedMenu.style.display = "none";
    }
    selectedMenu = pageEditorSocialContent;

    pageEditorSocialContent.style.display = "flex";
  });

  pageEditorHomepageContentText.addEventListener("click", function (e) {
    console.log(selectEditableContent);
    for (let i = 0; i < selectEditableContent.length; i++) {
      selectEditableContent[i].classList.add("editable-content");
      selectEditableContent[i].contentEditable = "true";
    }
  });

  backGroundColorChoice1.addEventListener("click", function (e) {
    hasBackgroundColor.forEach(function (item) {
      item.style.backgroundColor = "black";
    });
  });
  backGroundColorChoice2.addEventListener("click", function (e) {
    hasBackgroundColor.forEach(function (item) {
      item.style.backgroundColor = "pink";
    });
  });
  backGroundColorChoice3.addEventListener("click", function (e) {
    hasBackgroundColor.forEach(function (item) {
      item.style.backgroundColor = "#fc7a1e";
    });
  });
  backGroundColorChoice4.addEventListener("click", function (e) {
    hasBackgroundColor.forEach(function (item) {
      item.style.backgroundColor = "#48cae4";
    });
  });

  baseColorChoice1.addEventListener("click", function (e) {
    hasBaseColor.forEach(function (item) {
      item.style.backgroundColor = "yellow";
    });
  });
  baseColorChoice2.addEventListener("click", function (e) {
    hasBaseColor.forEach(function (item) {
      item.style.backgroundColor = "rgb(201, 179, 241)";
    });
  });
  baseColorChoice3.addEventListener("click", function (e) {
    hasBaseColor.forEach(function (item) {
      item.style.backgroundColor = "gold";
    });
  });
  baseColorChoice4.addEventListener("click", function (e) {
    hasBaseColor.forEach(function (item) {
      item.style.backgroundColor = "#0077b6";
    });
  });
  const editorButton = document.querySelector(".editor-save-button");

  backGroundImgChoice1.addEventListener("click", function (e) {
    hasBackgroundImg.forEach(function (item) {
      item.style.backgroundImage =
        "url('../cv-template/images/undraw_working_from_anywhere_ub67.svg')";
    });
  });

  // backGroundImgChoice2.addEventListener("click", function (e) {
  //   hasBackgroundImg.forEach(function (item) {
  //     item.style.backgroundImage = "url('../cv&portfolio/images/undraw_work_chat_erdt.svg')";
  //   });
  // });

  // backGroundImgChoice3.addEventListener("click", function (e) {
  //   hasBackgroundImg.forEach(function (item) {
  //     item.style.backgroundImage = "url('../cv&portfolio/images/undraw_work_chat_erdt.svg')";
  //   });
  // });

  // backGroundImgChoice4.addEventListener("click", function (e) {
  //   hasBackgroundImg.forEach(function (item) {
  //     item.style.backgroundImage = "url('../cv&portfolio/images/undraw_online_collaboration_7pfp.svg')";
  //   });
  // });

  deleteBtn.forEach(function (item) {
    item.addEventListener("click", deleteElement);
  });
  fontColor1.addEventListener("click", function (e) {
    fontColorEditDesign.forEach(function (a) {
      a.style.color = "white";
    });
  });
  fontColor2.addEventListener("click", function (e) {
    fontColorEditDesign.forEach(function (a) {
      a.style.color = "red";
    });
  });
  fontColor3.addEventListener("click", function (e) {
    fontColorEditDesign.forEach(function (a) {
      a.style.color = "blue";
    });
  });
  fontColor4.addEventListener("click", function (e) {
    fontColorEditDesign.forEach(function (a) {
      a.style.color = "black";
    });
  });

  // textColorEdit heseg

  textColor1.addEventListener("click", function (e) {
    textColorEdit.forEach(function (a) {
      a.style.color = "white";
    });
  });
  textColor2.addEventListener("click", function (e) {
    textColorEdit.forEach(function (a) {
      a.style.color = "black";
    });
  });
  textColor3.addEventListener("click", function (e) {
    textColorEdit.forEach(function (a) {
      a.style.color = "yellow";
    });
  });
  textColor4.addEventListener("click", function (e) {
    textColorEdit.forEach(function (a) {
      a.style.color = "grey";
    });
  });
  fontDesignChoice1.addEventListener("click", function (e) {
    hasFontChange.forEach(function (item) {
      item.style.fontFamily = "'Roboto', sans-serif";
    });
  });

  fontDesignChoice2.addEventListener("click", function (e) {
    hasFontChange.forEach(function (item) {
      item.style.fontFamily = "'Caveat', cursive";
    });
  });

  fontDesignChoice3.addEventListener("click", function (e) {
    hasFontChange.forEach(function (item) {
      item.style.fontFamily = "'Comfortaa', cursive";
    });
  });

  fontDesignChoice4.addEventListener("click", function (e) {
    hasFontChange.forEach(function (item) {
      item.style.fontFamily = "'Cormorant Infant', sans-serif";
    });
  });



  slider.addEventListener('input', function (e) {
    fontSizeEditor.forEach(function (item) {
      var font = 0;
      var font = window.getComputedStyle(item, null).getPropertyValue('font-size');

      newFont = parseFloat(font);
      newFont = Math.floor(40 * slider.value / 100);

      item.style.fontSize = newFont + 'px';
    });
  });

  toggleButtonFacebook.addEventListener("click", function (e) {
    if (!toggleButtonFacebook.classList.contains("toggle-button-active")) {
      toggleButtonFacebook.classList.add("toggle-button-active");

      pageSocialIconFacebook.style.display = "none";
    } else {
      toggleButtonFacebook.classList.remove("toggle-button-active");
      pageSocialIconFacebook.style.display = "flex";
    }
  });

  toggleButtonInstagram.addEventListener("click", function (e) {
    if (!toggleButtonInstagram.classList.contains("toggle-button-active")) {
      toggleButtonInstagram.classList.add("toggle-button-active");
      pageSocialIconInstagram.style.display = "none";
    } else {
      toggleButtonInstagram.classList.remove("toggle-button-active");
      pageSocialIconInstagram.style.display = "flex";
    }
  });

  toggleButtonLinkedin.addEventListener("click", function (e) {
    if (!toggleButtonLinkedin.classList.contains("toggle-button-active")) {
      toggleButtonLinkedin.classList.add("toggle-button-active");
      pageSocialIconLinkedin.style.display = "none";
    } else {
      toggleButtonLinkedin.classList.remove("toggle-button-active");
      pageSocialIconLinkedin.style.display = "flex";
    }
  });

  toggleButtonYoutube.addEventListener("click", function (e) {
    if (!toggleButtonYoutube.classList.contains("toggle-button-active")) {
      toggleButtonYoutube.classList.add("toggle-button-active");
      pageSocialIconYoutube.style.display = "none";
    } else {
      toggleButtonYoutube.classList.remove("toggle-button-active");
      pageSocialIconYoutube.style.display = "flex";
    }
  });



  function refreshPage() {
    headerNavBarHome.innerText = pageEditorNavBarContentHome.value;
    headerNavBarProducts.innerText = pageEditorNavBarContentProducts.value;
    headerNavBarEducation.innerText = pageEditorNavBarContentEducation.value;
    headerNavBarAboutUs.innerText = pageEditorNavBarContentAboutUs.value;
    headerNavBarContacts.innerText = pageEditorNavBarContentContacts.value;

    productsH2.innerText = pageEditorNavBarContentProducts.value;
    aboutH2.innerText = pageEditorNavBarContentAboutUs.value;
    contactH2.innerText = pageEditorNavBarContentContacts.value;

    for (let i = 0; i < selectEditableContent.length; i++) {
      selectEditableContent[i].classList.remove("editable-content");
      selectEditableContent[i].contentEditable = "false";
      console.log("refreshed");
    }
  }
  editorButton.addEventListener("click", refreshPage);
}

//--------------------Functions---------------------------//
function addNewInput() {
  var pageEditorNavBarContent1 = document.querySelector(
    ".page-editor-nav-bar-content1"
  );
  var navBarContent = document.querySelector("#nav-bar-content");
  var li = document.createElement("li");
  li.classList.add("li-item");
  var divEl = document.createElement("div");
  divEl.classList.add("page-editor-nav-bar-item");
  var inputEl = document.createElement("input");
  inputEl.classList.add("page-editor-nav-bar-content-new");
  inputEl.classList.add("input-a");

  var delBtn = document.createElement("button");
  delBtn.classList.add("del-btn");
  delBtn.setAttribute("type", "button");
  delBtn.innerHTML = "<img src='./images/delete.png'>";
  delBtn.addEventListener("click", deleteElement);

  li.innerHTML = '<a href="" class="header-nav-bar-new">';

  pageEditorNavBarContent1.appendChild(divEl);
  divEl.appendChild(inputEl);
  divEl.appendChild(delBtn);
  navBarContent.appendChild(li);
}
function deleteElement(event) {
  let currentEl = event.target.parentElement;
  currentEl.remove();

  let val = currentEl.firstElementChild.value;

  var menuEls = document.querySelectorAll(".li-item");

  for (var i = 0; i < menuEls.length; i++) {
    if (menuEls[i].innerText == val) {
      console.log(menuEls[i]);

      menuEls[i].remove();
    }
  }
}

//------------------Draggable Page editor---------------------//

function drag_start(event) {
  var style = window.getComputedStyle(event.target, null);
  event.dataTransfer.setData(
    "text/plain",
    parseInt(style.getPropertyValue("left"), 10) -
    event.clientX +
    "," +
    (parseInt(style.getPropertyValue("top"), 10) - event.clientY)
  );
}
function drop(event) {
  var offset = event.dataTransfer.getData("text/plain").split(",");
  var dm = document.getElementById("dragme");
  dm.style.left = event.clientX + parseInt(offset[0], 10) + "px";
  dm.style.top = event.clientY + parseInt(offset[1], 10) + "px";
  event.preventDefault();
  return false;
}
function drag_over(event) {
  event.preventDefault();
  return false;
}



//------------------------Page Listeners should be attached everytime its called from firebase-------------------------//
