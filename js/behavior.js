/**************************************************************************************************

    Set variables

/**************************************************************************************************/

var events = [	
				[	
					["Blackletter",1150,"Blackletter refers to the calligraphic script used by scribes throughout Western Europe from approximately 1150 to the 17th century. Derived from Carolingian miniscules, Blackletter is characterized by sharp narrow letters with broken angular lines which make it hard to read. The earliest typefaces used in printing (including those in the Gutenberg Bible) were modeled after handwritten Blackletter script.","Germany"],
					["Fraktur",1150,"Fraktur became the most common German blackletter typeface by the mid-16th century. It continued to be used in Germany until the 20th century when its use was forbidden by Adolf Hitler. Its name, derived from the words “broken” or “fractured”, implies its form which includes a high degree of “breaking”, i.e. lines that do not necessarily connect with each other, especially in curved letters.","Germany"]
				],
				[	
					["Humanist",1400,"Humanist typefaces were created during the 15th century by Venetian printers. These typefaces imitated the formal handwriting found in the humanistic (Renaissance) manuscripts of the time. Humanist typefaces are round (in opposition to Blackletter) and are characterized by short and thick bracketed serifs, a slanted cross stroke on the lowercase ‘e’, ascenders with slanted serifs, and low contrast between horizontals and verticals. They are still widely used today.",'']
				],
				[	
					["Letterpress",1450,"Johannes Gutenberg’s moveable type printing press (or letterpress) created in Mainz, Germany, combined the grape screw press used in winemaking with the system of moveable type developed by the Chinese. Combining these two technologies with his goldsmithing skills he developed more durable metal type, automated printing and reduced the price of books, making them more accessible.","Germany"]
				],
				[	
					["Jenson",1470,"Printer Nicolas Jenson, a French national working in Venice, created the typeface which bears his name. It was renowned for its evenness and the comfortable fit of its letters as words, as well as the beautiful proportions of the letterforms themselves. It a highly readable typeface appropriate for large amounts of text. A model for good typeface design, it has inspired many revivals.","Italy"]
				],
				[	
					["Oldstyle",1490,"Oldstyle type began with the Italian punchcutter Francesco Griffo. Oldstyle letters are characterized by the diagonal stress of handwriting in round letters and have sloped, bracketed or tapered serifs. Oldstyle capitals were influenced by carved roman capitals (majuscules); lowercase oldstyle letters were inspired by fifteenth century humanistic writing (minuscules).",'']
				],
				[	
					["Bembo",1496,"Commissioned by Aldus Manutias for the Aldine Press and designed by Francesco Griffo, Bembo is named after the writer Pietro Bembo. Bembo has a more consistent and quieter weight stress and variation than its precedents. Making the uppercase letters shorter than the ascenders in the lower case creates a more even texture on the page. Its serene quality makes Bembo an excellent book face.","Italy"]
				],
				[	
					["Italic",1500,"The first italic typeface was produced by Aldus Manutias. Its purpose was to save space in compact “pocket” books by condensing the width of the letters. Based on humanist cursive script, italics retained the slant of handwriting. Unlike the italic type used today however, early italics had only a modest slope and all capital letters were upright roman letters with no slant.",''],
					["Script",1500,"Script fonts imitate the cursive handwriting of early humanists who used a broad nib pen. Characteristics include a diagonal stress in round letters (borrowed from the slant of handwriting). Scripts are different from italics in that the strokes of letters actually connect with one another at the base. Though not appropriate in lengthy text settings, script is still widely used in shorter applications such as invitations.",'']
				],
				[	
					["Aldine",1501,"The typecutter Francesco Griffo created the typeface Aldine for Aldus Manutias’ 1501 pocketbook edition of the poetry of the Roman poet Virgil. Aldine italic was very popular in its own day and became the model for other italic types. It was widely (and poorly) imitated.","Italy"]
				],
				[	
					["Civilité",1557,"The Frenchman Robert Granjon designed the first script typeface, known as civilité-letter, in 1557. It was originally used in contracts and includes theatrical flourishes at the end of lines. These gestural strokes resemble the lines written on bank checks to ensure that no additional terms could be added. Civilité was also used for devotionals or proclamations.","France"]
				],
				[	
					["Pantograph",1603,"The first pantograph was constructed by Christoph Scheiner, who used the device to copy and scale drawings and diagrams. Later, the pantograph was used to scale fonts to a variety of sizes and also to condense, extend, and slant letterforms.","Germany"]
				],
				[	
					["Modern",1700,"Modern typestyles evolved from Transitional styles. Modern type is based on a machine aesthetic as opposed to handwriting. It is characterized by a strong geometric quality (evident in the vertical weight of rounded characters) and extreme contrast between thick and thin strokes. Also typical are horizontal hairline serifs that join the stems at a right angle without bracketing.",''],
					["Transitional",1700,"Type created in the middle of the eighteenth century when typestyles evolved from OldStyle to Modern is known as Transitional. It is characterized by greater contrast between thick and thin strokes, more horizontal serifs in the lowercase, and less diagonal stress within rounded forms. Transitional forms are also usally wider than oldstyle characters.",'']
				],
				[	
					["Baskerville",1757,"John Baskerville explored ways of improving the printing press to make it capable of more subtle impressions with greater precision. His sense of perfection and attention to details contributed greatly to the design of a detailed typeface influenced by the copperplate engraving of the period. Baskerville is characterized by open letterforms that give the page a light grey appearance. The most distinct letter in the face is the capital “Q” which has a sweeping tail. (This site uses Libre Baskerville, an open source webfont based off of Baskerville.)","England"]
				],
				[	
					["Lithography",1796,"Lithography is a printing process in which an image is drawn (in reverse) into an oily substance on a smoothed stone and then transferred to a piece of paper. Lithography works because of the mutual repulsion of oil and water. It was invented by Alois Senefelder as a cheap method of publishing theatrical works.","France"]
				],
				[	
					["Bodoni",1798,"Considered the first “modern” typeface, Bodoni was designed by the Italian printer Giambattista Bodoni. The typeface has a pronounced verticality and overall geometric construction that is a dramatic departure from its calligraphic influence. Bodoni’s extreme contrast of thick and thin strokes, flat unbracketed serifs, and round dot over the letter “i” are among its identifying charcteristics.","Italy"]
				],
				[	
					["Slab Serif",1815,"Slab serifs evolved out of the desire for eye-catching display letters for advertising posters and handbills in the early 19th century. The first slab serifed typeface (Antique) was designed by the Englishman Vincent Figgens. Slab serifs are characterized by bold heavy square-cornered serifs (usually without brackets), minimal stress in rounded letters, and little contrast between thick and thin strokes. Slab serifs became known as Egyptian typefaces after Napoleon’s conquest of Egypt. Although there was no relationship between Egyptian writing systems and slab serif types, their form does mimic the base and capital of Egytian columns.",'']
				],
				[	
					["Sans Serif",1816,"The first sans serif type appeared in 1816 in a specimen book by the English typefounder William Caslon IV. Sans serif type, as the name implies, lacks serifs. Other characteristics shared by most sans serif type include vertical stress and more uniform strokes. Though most sans serif faces include geometric construction, some combine organic and geometric qualities.",'']
				],
				[	
					["Steel Nib Pen",1822,"The pointed steel nib pen, first manufactured by John Mitchell in Birmingham, England retained a sharp point much longer than either reed or quill pens. Its sharp point, rather than broad edge, brought about a shift in the style of letters including greater contrast between thick and thin strokes. English Round Hand and Copperplate scripts were developed with steel nib pens.","England"]
				],
				[	
					["Halftone",1850,"The halftone is a reprographic technique that simulates continuous tone imagery through the use of dots, varying either in size, in shape, or in spacing. Developed by William Fox Talbot, the halftone process enabled photographs (with a full tonal range) to be reproduction on the same page with typographic elements.","England"]
				],
				[	
					["Typewriter",1868,"This was one of the first machines to offer an alternative to handwriting, mechanically transcribing letters on to paper. The QWERTY keyboard, designed to slow down the typing process and separate frequently used pairs of letters so that the typebars would not get tangled together, has been incorporated into later devices such as the Linotype and computer. Typewriters typically had only a handful of typefaces (of fixed-width) and one or two font sizes (pica or elite).","England"]
				],
				[	
					["Offset Lithography",1875,"The most common kind of offset lithography is derived from the photo offset process, which involves using light-sensitive chemicals and photographic techniques to transfer type and images from film negatives to printing plates. These flexible plates are wrapped around cylindrical drums and are inked. The inked image is then trasferred (or “offset”) from the plate to a rubber blanket and finally to paper.","England"]
				],
				[	
					["Linotype",1884,"Linotype, invented by Ottmar Mergenthaler, automated typesetting by producing an entire line of metal type at once. Metallic letter molds (matrices) were assembled using a typewriter keyboard and filled with molten metal to cast the type. This was a significant improvement over the previous industry standard; manual, letter-by-letter typesetting using a composing stick and drawers of letters.","Germany"]
				],
				[	
					["Futura",1927,"Futura was designed by the German book designer Paul Renner. Its initial design was built on a circle, square, and triangle using a compass and straightedge and became the paradigm of a geometic sans serif. Its final form however, was not geometrically perfect and its strokes were not a uniform width. Its architectural form and function together with its lack of decoration emodied the spirit of the modernist movement.","England"]
				],
				[	
					["Memphis",1929,"The typeface Memphis (named after the capital of ancient Egypt) was originally designed by the German Rudolf Wolf for the Stemple Foundry. The typeface is a variant of the sans serif Futura typeface and shares its geometric form. It is considered a monoweight since its stems and serifs appear to have the same weight. Peculiarities which make the typeface unique include upper and lowercase “O’s” which are perfect circles and a lower case “r” with a circular ear. Memphis is suitable for both display and text applications.","Germany"]
				],
				[	
					["Electronic Digital Computer",1940,"The first electronic digital computers were the size of a large room, consuming as much power as several hundred modern personal computers. They were used primarily for military applications.","USA"]
				],
				[	
					["Machine Readable",1960,"Machine readable fonts utilize optical character recognition and are designed to be read by machines as well as humans. They are characterized by a simplicity of form and monospacing (fixed widths). Machine readable fonts are mostly used by banks, credit card companies, and other businesses that process large amounts of printed data by machine.",'']
				],
				[	
					["IBM Selectric Typewriter",1961,"The Selectric was known as the carriageless typewriter. It replaced the traditional typewriter’s moving carriage with a roller that stayed in position while a typeball and ribbon mechanism moved from side to side eliminating the problem of clashing typebars. It also incorporated word processing and an ability to change fonts which became important features in desktop publishing.","USA"],
					["LetraSet",1961,"LetraSet was a kind of do-it-yourself lettering. You could “set” your own type by simply positioning a polyethylene sheet of dry transfer lettering with a low tack adhesive over a piece of paper and rubbing it onto the surface below.","England"]
				],
				[	
					["OCR-B",1968,"OCR-B, designed by the Swiss type designer Adrian Frutiger, is the European counterpart to OCR-A. It is designed to be read by both machines and humans and it has a less technical look than OCR-A. Declared a world standard, it is widely used for UPC / EAN barcodes.","Switzerland"]
				],
				[	
					["Dot Matrix Printer",1970,"The dot matrix printer was a low-end printer commonly used with the first personal computers. It included a print head that ran back and forth on the page and printed by impact, striking an ink-soaked cloth ribbon against the paper much like the print mechanism on a typewriter. It was extremely noisy and produced very low resolution (pixelated) type and images.","USA"]
				],
				[	
					["Portable Computer",1975,"The first portable computer was the IBM 5100 (introduced six years before the first IBM PC). It had 64 KB of RAM, was the size of a small suitcase, and weighed about 55 lbs. The unit included a small keyboard and a 5” diagonal CRT display.","USA"]
				],
				[	
					["Bitmapped",1980,"Bitmapped fonts were created for the coarse resolutions of computer screens and dot matrix printers. Rendered on a matrix or grid of square cells or pixels, each bit that made up an image corresponded to one pixel. The biggest disadvantage of bitmapped fonts was that diagonal elements appear as jagged edges when enlarged. Bitmapped fonts became obsolete with the development of high resolution computer screens and output devices.",'']
				],
				[	
					["Apple Macintosh Computer",1984,"The Macintosh was the first commercially successful personal computer with a mouse and a Graphical User Interface (GUI). It also developed the concept of What You See Is What You Get (WYSIWYG) printing. The Macintosh put unprecedented power into the hands of the user. It democratized computing and revolutionalized the design and production of type, eliminating specialized typesetting companies.","USA"],
					["PostScript",1984,"PostScript, a page description language which treats type as objects rather than as bit maps, was released by Adobe Systems, Inc. in 1984. Defining lines with Bézier curves allows letters to be scaleable so they can be used at any size without losing sharpness or quality.","USA"]
				],
				[	
					["Apple Laser Writer",1985,"Apple’s first laser printer, the LaserWriter, had Adobe’s high quality scalable PostScript fonts built into its memory. In combination with WYSIWYG publishing software like PageMaker the LaserWriter was a key component in the development of desktop publishing.","USA"],
					["PageMaker",1985,"PageMaker was one of the first software programs available for use with desktop computers that supported the integration of type and image into page layouts. Its graphical user interface made it easy to use and helped popularize the Apple Macintosh computer and Desktop Publishing.","USA"],
					["Oakland",1985,"Oakland, designed by Zuzana Licko, was one of the first fonts designed specifically to embrace the coarse rendering of fonts on a macintosh computer and dot matrix printer. Using public domain software, Licko created Oakland’s four fixed-size fonts of increasingly refine resolution (Oakland, 6, 8, 10, and 15) which were released in Emigré, a magazine founded by Licko and her husband Rudy Vanderlans. Emigré opened up the market for smaller type foundries and emerged as a showcase for cutting edge type design.","USA"]
				],
				[	
					["Fontographer",1986,"Fontographer was the first commerically available software for editing Bézier curves on a personal computer. Developed for the Mac (before Adobe Illustrator) it allowed high quality fonts (in the PostScript format) to be developed for a fraction of the cost of other existing methods. Fontographer led to the democratization of type design enabling self-taught type designers to produce fonts for professional use without substantial capital investment.","USA"]
				],
				[	
					["Template Gothic",1990,"Designed by Barry Deck, Template Gothic was inspired by a degraded stenciled sign hung in his neighborhood laundromat. The vernacular source of his typeface referenced a process that is both mechanical and manual letters drawn with a plastic stencil. Template Gothic was ubiquitous by the end of the 1990s, representing the desire during the grunge era to abandon the perfection of modernist letterforms and embrace an imperfect world.","USA"],
					["Grunge",1990,"Grunge fonts are dirty, abstract, typefaces whose messy and edgy qualities represent the antithesis of the hygienic purity of the machine age. They were typically hand-scrawled scratchy marks that referenced urban graffiti. They represented the new found interest in the vernacular that had arisen alongside — and often in opposition to — the computer in the 1980s.",''],
					["Mashed",1990,"Adobe’s 1989 decision to end the encryption of its PostScript fonts coupled with the cut and paste features in software programs such as Fontographer, opened the door for hacking type. Mashed typefaces (or mash-ups) are a patchwork of pre-existing fonts cut and pasted from different sources. Experimental in nature, they were often somewhat crudely executed and intentionally unfinished and imperfect.",''],
					["Dead History",1990,"Designer P. Scott Makela looked to the future, not the past, for inspiration for his typeface Dead History. A manipulation of the vectors of two exiting typefaces Linotype Centennial (a traditional serif) and Adobe’s VAG Rounded (a kind of pop classic), Dead History exemplifies the “sampling” approach to type design that Fontographer made possible. According to him, Dead History “personifies a new attitude in type creation . . . the result of the computer’s capabilities to function as the perfect assembling tool.","USA"],
					["Blurred",1990,"Blurred type explored new typographic forms using Adobe Photoshop. Although Photoshop (which was introduced in 1990) was designed for the manipulation and reproduction of photographs, designers soon began to explore its ability to set and edit type.",''],
					["Random",1990,"Random fonts challenged the notion of the fixed and non-varying nature of type carried over from print technology which takes one form and copies it over and over again. If we can read the natural variations of handwriting, it reasoned, the sameness of type is not necessary.",''],
					["Web-Safe",1990,"Web-safe fonts are so called “resident” fonts that come installed on a wide range of computers as part of their operating systems. This guarantees that any content designed using these fonts will be displayed in the same font (on both Macs and PCs) and no substitutions will occurr. Websafe fonts include Andale Mono, Arial, Arial Black, Comic Sans, Courier New, Georgia, Impact, Times New Roman, Trebuchet, Verdana and Wingdings.",""],
					["Beowolf",1990,"Beowolf was designed by Letterror, the Dutch duo of Erik van Blokland and Just van Rossum. It was digitized by hand in Ikarus and then programmed to change at random during printing. It challenged the notion that outline fonts are inherently superior to bitmapped ones and was proof that fonts were no longer physical objects - but rather instructions. The name came from the poem ‘Beowulf’, which resists traditional modes of literary criticism because it cannot be treated as a unique, fixed document.","Netherlands"],
					["Interactive",1990,"Interactive typefaces built on the concept of mashed fonts with one important difference – they invited the users themselves to become involved in making changes to their form. Alterations previously the exclusive domain of the types’ creators were placed in the hands of a wider audience who could make changes at will using computer-based applications.",'']
				],
				[	
					["Blur",1992,"British designer Neville Brody’s typeface, Blur, a mutant manipulated type, embraced its own imperfection. Its biomorphic features were created by running Helvetica through Photoshop’s blur filter and then vectorizing the results.","UK"]
				],
				[	
					["Walker",1995,"Walker, designed by Matthew Carter, is one of the first interactive and mutable typefaces. It was commissioned as part of the branding system for the Walker Art Center in Minneapolis and is used exclusively by the museum’s in-house designers. A sans serif typeface with optional snap on/off serifs for certain letters and a flexible underlining system, Walker represents the diversity of the museum’s programming.","USA"]
				],
				[	
					["Verdana",1996,"Matthew Carter’s widely used face is regarded as the ultimate example of readability on the web. Designed specifically to be viewed at small sizes on a computer screen, it is characterized by the square dot over the “i”, lack of serifs, large x-height, wide proportions, loose letter-spacing, large counters, and emphasized distinctions between similarly-shaped characters (such as i, I, and 1) all of which help increase its legibility.","USA"]
				],
				[	
					["Cleartype",2000,"Cleartype is a font display technology developed by Microsoft that improves the readability of text viewed in its windows operating system on LCD screens of all sizes. By breaking down pixels into smaller sub-pixels it renders the jagged edges of diagonals more smoothly.",''],
					["Generative",2000,"Generative typography creates new versions of existing typefaces using a computational algorithmic process to transform existing typefaces into new versions of themselves.",''],
					["Intelligent",2000,"Intelligent typefaces are dynamic in form and responsive to real time input. Intelligent fonts throw most typographical conventions out the window.",'']
				],
				[	
					["Processing",2001,"Processing is an open source programming language and visualization tool created by Ben Fry and Casey Reas. Its accessibility and ease of use has made it a popular tool for experimenting with the design of new typefaces.","USA"]
				],
				[	
					["Twin",2003,"Twin, a web-based app commissioned by the Design Institute at the University of Minnesota and designed for the Twin Cities by Erik von Blokland and Just van Rossum with LettError of The Hague, alters its weight and appearance dynamically based on changes in the reported air temperature. It was designed using RoboFab (part of the Python library).","Netherlands"]
				],
				[	
					["Constantia",2007,"Commissioned by Microsoft, Canadian designer John Hudson created Constantia specifically for use with both print and electronic media. This flexibility was intended to help develop a consistent brand across media platforms. The typeface is characterized by modulated wedge shaped serifs, a relatively small x-height, and long ascenders and descenders. Its porportions make it a good book face. Other Cleartype fonts include Corbel, Calibri, Consolas, Candara, Cambria, Constantia.","Canada"],
					["iPhone",2007,"The iPhone was the first portable multi-use smartphone with audio-visual media capabilties and wi-fi and cellular data connectivity. Its multi-touch screen and virtual keyboard made it very user friendly.","USA"]
				],
				[	
					["iPad",2010,"The iPad is a tablet computer developed by Apple Inc. as a personal platform for audio-visual media including books, periodicals, movies, music, games, apps and web content. Its design, which makes the hands-on experience intuitive and the technology invisible, coupled with its razor sharp type, has greatly accelerated the development of e-books.","USA"]
				],
				[	
					["Averia",2011,"Dan Sayers, a non-designer, created Avería overlapping and computationally averaging the 725 fonts on his computer and morphing them into new shapes. Avería is a Spanish word derived from the root of the word average.","USA"],
    			]
    		];  


var first_year = 1150;
var last_year = 2011;
var year_range = last_year - first_year;

var scale = 30;

var timeline_offset = 100;
var event_details_offset = 63;
var you_are_here_offset = 10;

var latest_event = [null,null];


/**************************************************************************************************

	Run functions on page load

/**************************************************************************************************/

$(function(){
	draw_timeline();
	add_event_markers();

	set_scroll_triggers();
	set_click_triggers();

	animate_event_container(0);
});

/**************************************************************************************************

    Set-up functions

/**************************************************************************************************/

function draw_timeline(){
	$('#timeline').css({
						'height' : year_range * scale + 3 + 'px',
						'top' : timeline_offset + 'px'
					});

	$('#you_are_here').css('top',timeline_offset - you_are_here_offset + 'px');	
}

function add_event_markers(){
	for(i=0; i < events.length; i++){
		$('body').append('<div class="event_marker">&nbsp;</div> ' + '<span class="event_date">' + events[i][0][1] + '</span>');

		var event_offset = ((events[i][0][1] - first_year) * scale) + timeline_offset;
		$('.event_marker:last-of-type').css('top', event_offset + 'px');
		$('.event_date:last-of-type').css('top', event_offset - 9 + 'px');

		$('body').append('<div class="event_details"><div class="event_buttons" id="event_buttons_' + i + '"></div></div>');

		for(x=0; x < events[i].length; x++){
			$('.event_details:last-of-type').css('top', ((events[i][x][1] - first_year) * scale) + timeline_offset - event_details_offset + 'px');

			$('.event_details:last-of-type').append('<div class="event_text" id="event_' + i + '_' + x + '"><h1>' + events[i][x][0] + '</h1><p>' + events[i][x][2] + '</p></div>');

			$('.event_details:last-of-type .event_buttons').append('<div class="button" id="button_' + i + '_' + x + '"  onclick="animate_event(' + i + ',' + x + ')">&sect;</div>');

			if (events[i][x][3]){
				$('.event_details:last-of-type .event_text:last-of-type').append('<span>' + events[i][x][3] + '</span>')
			}
		}
	}
}

/**************************************************************************************************

    Interaction: Buttons and event triggers

/**************************************************************************************************/

function set_click_triggers(){
	$('#first').click(function(){
		scroll(0);
	});

	$('#previous').click(function(){
		scroll(latest_event[0] - 1);
	});

	$('#next').click(function(){
		scroll(latest_event[0] + 1);
	});

	$('#last').click(function(){
		scroll(events.length - 1);
	});
}

function set_scroll_triggers(){
	$( window ).scroll(function() {
		var current_year = ( $('#you_are_here').offset().top - timeline_offset ) / scale + first_year;

		for(i=0; i < events.length; i++){
			if (current_year < events[i][0][1] + .5 && current_year > events[i][0][1] - .5){
				animate_event_container(i);
			}
		}
	});
}

function scroll(target_event){
	var scroll_destination = (events[target_event][0][1] - first_year) * scale;
	$('html, body').animate({
	    'scrollTop': scroll_destination
	}, 700);
}

/**************************************************************************************************

    Animation functions

/**************************************************************************************************/

function animate_event_container(container_num){
	if (latest_event[0] !== container_num){
		$('.event_buttons').css({'display':'none'});

		if ($('#event_buttons_' + container_num + ' .button').length > 1 ){
			$('#event_buttons_' + container_num + '').css({'display':'block'});
			$('#event_buttons_' + container_num + ' .button').animate({'opacity':'1'},500);
		}

		if (container_num === 0){
			$('#first, #previous').css({'visibility':'hidden'});
		} else if(container_num === events.length - 1){
			$('#next, #last').css({'visibility':'hidden'});
		} else{
			$('#first, #previous, #next, #last').css({'visibility':'visible'});
		}

		animate_event(container_num,0);
	}
}

function animate_event(container_num,event_num){
	$('.button').css({'color':'#ccc'});
	$('#button_' + container_num + '_' + event_num + '').css({'color':'#f00'});


	$('.event_text').css({'display':'none'});
	$('.event_text *').css({'opacity':'0'});

	$('#event_' + container_num + '_' + event_num + '').css({'display':'block'});

	$('#event_' + container_num + '_' + event_num + ' h1').animate({'opacity':'1'},500);
	$('#event_' + container_num + '_' + event_num + ' p').animate({'opacity':'1'},1500);
	$('#event_' + container_num + '_' + event_num + ' span').animate({'opacity':'1'},2000);
	$('#event_' + container_num + '_' + event_num + ' span').animate({'opacity':'1'},2000);

	latest_event = [container_num,event_num];
}
