(function () {
  "use strict";

  window.CONSTITUTION_CORPUS = {
  "metadata": {
    "id": "us-founding-and-rights-1776-1791-official",
    "title": "Founding and rights texts, 1776–1791",
    "description": "A small, transparent corpus for exact next-word frequency demonstrations. It traces a fifteen-year arc from stated rights and independence to a governing frame and ratified federal protections. It is not a language-model training corpus and its frequencies are not LLM probabilities.",
    "preparedOn": "2026-08-12",
    "blockCount": 157,
    "tokenCount": 6992,
    "boundary": "The substantive text of the Virginia Declaration of Rights (1776), the Declaration of Independence (1776), the Preamble and Articles I–VII of the Constitution (1787), and ratified Amendments I–X, the Bill of Rights (1791). Headings, dates, signatures, attestations, inscriptions, the two unratified 1789 proposals, editorial notes, the Articles of Confederation, and Amendments XI–XXVII are excluded.",
    "blockBoundaryPolicy": "Next-word matches stay inside each source prose block; they never cross block boundaries.",
    "normalization": [
      "Unicode NFKC normalization",
      "lowercase",
      "curly apostrophes converted to ASCII apostrophes",
      "hyphens and dashes converted to word boundaries",
      "tokens contain ASCII letters or digits with an optional internal apostrophe",
      "no stemming, stop-word removal, or spelling modernization"
    ],
    "sources": [
      {
        "id": "virginia-rights",
        "title": "The Virginia Declaration of Rights",
        "date": "June 12, 1776",
        "url": "https://www.archives.gov/founding-docs/virginia-declaration-of-rights",
        "authority": "U.S. National Archives and Records Administration",
        "selectionNote": "The preamble and Sections 1–16 are included as separate blocks. The source page's Section 4 wording, ‘which, nor being descendible,’ is preserved rather than silently corrected."
      },
      {
        "id": "declaration",
        "title": "Declaration of Independence: A Transcription",
        "date": "July 4, 1776",
        "url": "https://www.archives.gov/founding-docs/declaration-transcript",
        "authority": "U.S. National Archives and Records Administration",
        "selectionNote": "The declaration text is included as prose blocks; heading, signatures, and page material are excluded."
      },
      {
        "id": "constitution",
        "title": "The Constitution of the United States: A Transcription",
        "date": "September 17, 1787",
        "url": "https://www.archives.gov/founding-docs/constitution-transcript",
        "authority": "U.S. National Archives and Records Administration",
        "selectionNote": "The Preamble and Articles I–VII are included; signatures, attestation, and inscription notes are excluded."
      },
      {
        "id": "bill-of-rights",
        "title": "The Bill of Rights: A Transcription",
        "date": "December 15, 1791",
        "url": "https://www.archives.gov/founding-docs/bill-of-rights-transcript",
        "authority": "U.S. National Archives and Records Administration",
        "selectionNote": "Only the later section containing ratified Amendments I–X is included; the earlier transcription of all 12 proposed articles is excluded."
      }
    ]
  },
  "blocks": [
    {
      "source": "virginia-rights",
      "sourceLine": 1,
      "text": "A Declaration of Rights is made by the representatives of the good people of Virginia, assembled in full and free convention which rights do pertain to them and their posterity, as the basis and foundation of government."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 2,
      "text": "That all men are by nature equally free and independent and have certain inherent rights, of which, when they enter into a state of society, they cannot, by any compact, deprive or divest their posterity; namely, the enjoyment of life and liberty, with the means of acquiring and possessing property, and pursuing and obtaining happiness and safety."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 3,
      "text": "That all power is vested in, and consequently derived from, the people; that magistrates are their trustees and servants and at all times amenable to them."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 4,
      "text": "That government is, or ought to be, instituted for the common benefit, protection, and security of the people, nation, or community; of all the various modes and forms of government, that is best which is capable of producing the greatest degree of happiness and safety and is most effectually secured against the danger of maladministration. And that, when any government shall be found inadequate or contrary to these purposes, a majority of the community has an indubitable, inalienable, and indefeasible right to reform, alter, or abolish it, in such manner as shall be judged most conducive to the public weal."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 5,
      "text": "That no man, or set of men, is entitled to exclusive or separate emoluments or privileges from the community, but in consideration of public services; which, nor being descendible, neither ought the offices of magistrate, legislator, or judge to be hereditary."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 6,
      "text": "That the legislative and executive powers of the state should be separate and distinct from the judiciary; and that the members of the two first may be restrained from oppression, by feeling and participating the burdens of the people, they should, at fixed periods, be reduced to a private station, return into that body from which they were originally taken, and the vacancies be supplied by frequent, certain, and regular elections, in which all, or any part, of the former members, to be again eligible, or ineligible, as the laws shall direct."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 7,
      "text": "That elections of members to serve as representatives of the people, in assembly ought to be free; and that all men, having sufficient evidence of permanent common interest with, and attachment to, the community, have the right of suffrage and cannot be taxed or deprived of their property for public uses without their own consent or that of their representatives so elected, nor bound by any law to which they have not, in like manner, assented, for the public good."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 8,
      "text": "That all power of suspending laws, or the execution of laws, by any authority, without consent of the representatives of the people, is injurious to their rights and ought not to be exercised."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 9,
      "text": "That in all capital or criminal prosecutions a man has a right to demand the cause and nature of his accusation, to be confronted with the accusers and witnesses, to call for evidence in his favor, and to a speedy trial by an impartial jury of twelve men of his vicinage, without whose unanimous consent he cannot be found guilty; nor can he be compelled to give evidence against himself; that no man be deprived of his liberty except by the law of the land or the judgment of his peers."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 10,
      "text": "That excessive bail ought not to be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 11,
      "text": "That general warrants, whereby an officer or messenger may be commanded to search suspected places without evidence of a fact committed, or to seize any person or persons not named, or whose offense is not particularly described and supported by evidence, are grievous and oppressive and ought not to be granted."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 12,
      "text": "That in controversies respecting property, and in suits between man and man, the ancient trial by jury is preferable to any other and ought to be held sacred."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 13,
      "text": "That the freedom of the press is one of the great bulwarks of liberty, and can never be restrained but by despotic governments."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 14,
      "text": "That a well-regulated militia, composed of the body of the people, trained to arms, is the proper, natural, and safe defense of a free state; that standing armies, in time of peace, should be avoided as dangerous to liberty; and that in all cases the military should be under strict subordination to, and governed by, the civil power."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 15,
      "text": "That the people have a right to uniform government; and, therefore, that no government separate from or independent of the government of Virginia ought to be erected or established within the limits thereof."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 16,
      "text": "That no free government, or the blessings of liberty, can be preserved to any people but by a firm adherence to justice, moderation, temperance, frugality, and virtue and by frequent recurrence to fundamental principles."
    },
    {
      "source": "virginia-rights",
      "sourceLine": 17,
      "text": "That religion, or the duty which we owe to our Creator, and the manner of discharging it, can be directed only by reason and conviction, not by force or violence; and therefore all men are equally entitled to the free exercise of religion, according to the dictates of conscience; and that it is the mutual duty of all to practise Christian forbearance, love, and charity toward each other."
    },
    {
      "source": "declaration",
      "sourceLine": 1,
      "text": "The unanimous Declaration of the thirteen united States of America, When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation."
    },
    {
      "source": "declaration",
      "sourceLine": 2,
      "text": "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness."
    },
    {
      "source": "declaration",
      "sourceLine": 3,
      "text": "Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed."
    },
    {
      "source": "declaration",
      "sourceLine": 4,
      "text": "But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government."
    },
    {
      "source": "declaration",
      "sourceLine": 5,
      "text": "The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world."
    },
    {
      "source": "declaration",
      "sourceLine": 6,
      "text": "He has refused his Assent to Laws, the most wholesome and necessary for the public good."
    },
    {
      "source": "declaration",
      "sourceLine": 7,
      "text": "He has forbidden his Governors to pass Laws of immediate and pressing importance, unless suspended in their operation till his Assent should be obtained; and when so suspended, he has utterly neglected to attend to them."
    },
    {
      "source": "declaration",
      "sourceLine": 8,
      "text": "He has refused to pass other Laws for the accommodation of large districts of people, unless those people would relinquish the right of Representation in the Legislature, a right inestimable to them and formidable to tyrants only."
    },
    {
      "source": "declaration",
      "sourceLine": 9,
      "text": "He has called together legislative bodies at places unusual, uncomfortable, and distant from the depository of their public Records, for the sole purpose of fatiguing them into compliance with his measures."
    },
    {
      "source": "declaration",
      "sourceLine": 10,
      "text": "He has dissolved Representative Houses repeatedly, for opposing with manly firmness his invasions on the rights of the people."
    },
    {
      "source": "declaration",
      "sourceLine": 11,
      "text": "He has refused for a long time, after such dissolutions, to cause others to be elected; whereby the Legislative powers, incapable of Annihilation, have returned to the People at large for their exercise; the State remaining in the mean time exposed to all the dangers of invasion from without, and convulsions within."
    },
    {
      "source": "declaration",
      "sourceLine": 12,
      "text": "He has endeavoured to prevent the population of these States; for that purpose obstructing the Laws for Naturalization of Foreigners; refusing to pass others to encourage their migrations hither, and raising the conditions of new Appropriations of Lands."
    },
    {
      "source": "declaration",
      "sourceLine": 13,
      "text": "He has obstructed the Administration of Justice, by refusing his Assent to Laws for establishing Judiciary powers."
    },
    {
      "source": "declaration",
      "sourceLine": 14,
      "text": "He has made Judges dependent on his Will alone, for the tenure of their offices, and the amount and payment of their salaries."
    },
    {
      "source": "declaration",
      "sourceLine": 15,
      "text": "He has erected a multitude of New Offices, and sent hither swarms of Officers to harrass our people, and eat out their substance."
    },
    {
      "source": "declaration",
      "sourceLine": 16,
      "text": "He has kept among us, in times of peace, Standing Armies without the Consent of our legislatures."
    },
    {
      "source": "declaration",
      "sourceLine": 17,
      "text": "He has affected to render the Military independent of and superior to the Civil power."
    },
    {
      "source": "declaration",
      "sourceLine": 18,
      "text": "He has combined with others to subject us to a jurisdiction foreign to our constitution, and unacknowledged by our laws; giving his Assent to their Acts of pretended Legislation:"
    },
    {
      "source": "declaration",
      "sourceLine": 19,
      "text": "For Quartering large bodies of armed troops among us:"
    },
    {
      "source": "declaration",
      "sourceLine": 20,
      "text": "For protecting them, by a mock Trial, from punishment for any Murders which they should commit on the Inhabitants of these States:"
    },
    {
      "source": "declaration",
      "sourceLine": 21,
      "text": "For cutting off our Trade with all parts of the world:"
    },
    {
      "source": "declaration",
      "sourceLine": 22,
      "text": "For imposing Taxes on us without our Consent:"
    },
    {
      "source": "declaration",
      "sourceLine": 23,
      "text": "For depriving us in many cases, of the benefits of Trial by Jury:"
    },
    {
      "source": "declaration",
      "sourceLine": 24,
      "text": "For transporting us beyond Seas to be tried for pretended offences:"
    },
    {
      "source": "declaration",
      "sourceLine": 25,
      "text": "For abolishing the free System of English Laws in a neighbouring Province, establishing therein an Arbitrary government, and enlarging its Boundaries so as to render it at once an example and fit instrument for introducing the same absolute rule into these Colonies:"
    },
    {
      "source": "declaration",
      "sourceLine": 26,
      "text": "For taking away our Charters, abolishing our most valuable Laws, and altering fundamentally the Forms of our Governments:"
    },
    {
      "source": "declaration",
      "sourceLine": 27,
      "text": "For suspending our own Legislatures, and declaring themselves invested with power to legislate for us in all cases whatsoever."
    },
    {
      "source": "declaration",
      "sourceLine": 28,
      "text": "He has abdicated Government here, by declaring us out of his Protection and waging War against us."
    },
    {
      "source": "declaration",
      "sourceLine": 29,
      "text": "He has plundered our seas, ravaged our Coasts, burnt our towns, and destroyed the lives of our people."
    },
    {
      "source": "declaration",
      "sourceLine": 30,
      "text": "He is at this time transporting large Armies of foreign Mercenaries to compleat the works of death, desolation and tyranny, already begun with circumstances of Cruelty & perfidy scarcely paralleled in the most barbarous ages, and totally unworthy the Head of a civilized nation."
    },
    {
      "source": "declaration",
      "sourceLine": 31,
      "text": "He has constrained our fellow Citizens taken Captive on the high Seas to bear Arms against their Country, to become the executioners of their friends and Brethren, or to fall themselves by their Hands."
    },
    {
      "source": "declaration",
      "sourceLine": 32,
      "text": "He has excited domestic insurrections amongst us, and has endeavoured to bring on the inhabitants of our frontiers, the merciless Indian Savages, whose known rule of warfare, is an undistinguished destruction of all ages, sexes and conditions."
    },
    {
      "source": "declaration",
      "sourceLine": 33,
      "text": "In every stage of these Oppressions We have Petitioned for Redress in the most humble terms: Our repeated Petitions have been answered only by repeated injury. A Prince, whose character is thus marked by every act which may define a Tyrant, is unfit to be the ruler of a free people."
    },
    {
      "source": "declaration",
      "sourceLine": 34,
      "text": "Nor have We been wanting in attentions to our Brittish brethren. We have warned them from time to time of attempts by their legislature to extend an unwarrantable jurisdiction over us. We have reminded them of the circumstances of our emigration and settlement here. We have appealed to their native justice and magnanimity, and we have conjured them by the ties of our common kindred to disavow these usurpations, which, would inevitably interrupt our connections and correspondence."
    },
    {
      "source": "declaration",
      "sourceLine": 35,
      "text": "They too have been deaf to the voice of justice and of consanguinity. We must, therefore, acquiesce in the necessity, which denounces our Separation, and hold them, as we hold the rest of mankind, Enemies in War, in Peace Friends."
    },
    {
      "source": "declaration",
      "sourceLine": 36,
      "text": "We, therefore, the Representatives of the united States of America, in General Congress, Assembled, appealing to the Supreme Judge of the world for the rectitude of our intentions, do, in the Name, and by Authority of the good People of these Colonies, solemnly publish and declare, That these United Colonies are, and of Right ought to be Free and Independent States; that they are Absolved from all Allegiance to the British Crown, and that all political connection between them and the State of Great Britain, is and ought to be totally dissolved; and that as Free and Independent States, they have full Power to levy War, conclude Peace, contract Alliances, establish Commerce, and to do all other Acts and Things which Independent States may of right do."
    },
    {
      "source": "declaration",
      "sourceLine": 37,
      "text": "And for the support of this Declaration, with a firm reliance on the protection of divine Providence, we mutually pledge to each other our Lives, our Fortunes and our sacred Honor."
    },
    {
      "source": "constitution",
      "sourceLine": 56,
      "text": "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."
    },
    {
      "source": "constitution",
      "sourceLine": 61,
      "text": "All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives."
    },
    {
      "source": "constitution",
      "sourceLine": 64,
      "text": "The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature."
    },
    {
      "source": "constitution",
      "sourceLine": 65,
      "text": "No Person shall be a Representative who shall not have attained to the Age of twenty five Years, and been seven Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State in which he shall be chosen."
    },
    {
      "source": "constitution",
      "sourceLine": 66,
      "text": "Representatives and direct Taxes shall be apportioned among the several States which may be included within this Union, according to their respective Numbers, which shall be determined by adding to the whole Number of free Persons, including those bound to Service for a Term of Years, and excluding Indians not taxed, three fifths of all other Persons. The actual Enumeration shall be made within three Years after the first Meeting of the Congress of the United States, and within every subsequent Term of ten Years, in such Manner as they shall by Law direct."
    },
    {
      "source": "constitution",
      "sourceLine": 67,
      "text": "The Number of Representatives shall not exceed one for every thirty Thousand, but each State shall have at Least one Representative; and until such enumeration shall be made, the State of New Hampshire shall be entitled to chuse three, Massachusetts eight, Rhode-Island and Providence Plantations one, Connecticut five, New-York six, New Jersey four, Pennsylvania eight, Delaware one, Maryland six, Virginia ten, North Carolina five, South Carolina five, and Georgia three."
    },
    {
      "source": "constitution",
      "sourceLine": 68,
      "text": "When vacancies happen in the Representation from any State, the Executive Authority thereof shall issue Writs of Election to fill such Vacancies."
    },
    {
      "source": "constitution",
      "sourceLine": 70,
      "text": "The House of Representatives shall chuse their Speaker and other Officers; and shall have the sole Power of Impeachment."
    },
    {
      "source": "constitution",
      "sourceLine": 73,
      "text": "The Senate of the United States shall be composed of two Senators from each State, chosen by the Legislature thereof, for six Years; and each Senator shall have one Vote."
    },
    {
      "source": "constitution",
      "sourceLine": 74,
      "text": "Immediately after they shall be assembled in Consequence of the first Election, they shall be divided as equally as may be into three Classes."
    },
    {
      "source": "constitution",
      "sourceLine": 75,
      "text": "The Seats of the Senators of the first Class shall be vacated at the Expiration of the second Year, of the second Class at the Expiration of the fourth Year, and of the third Class at the Expiration of the sixth Year, so that one third may be chosen every second Year; and if Vacancies happen by Resignation, or otherwise, during the Recess of the Legislature of any State, the Executive thereof may make temporary Appointments until the next Meeting of the Legislature, which shall then fill such Vacancies."
    },
    {
      "source": "constitution",
      "sourceLine": 76,
      "text": "No Person shall be a Senator who shall not have attained to the Age of thirty Years, and been nine Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State for which he shall be chosen."
    },
    {
      "source": "constitution",
      "sourceLine": 78,
      "text": "The Vice President of the United States shall be President of the Senate, but shall have no Vote, unless they be equally divided."
    },
    {
      "source": "constitution",
      "sourceLine": 79,
      "text": "The Senate shall chuse their other Officers, and also a President pro tempore, in the Absence of the Vice President, or when he shall exercise the Office of President of the United States."
    },
    {
      "source": "constitution",
      "sourceLine": 81,
      "text": "The Senate shall have the sole Power to try all Impeachments. When sitting for that Purpose, they shall be on Oath or Affirmation. When the President of the United States is tried, the Chief Justice shall preside: And no Person shall be convicted without the Concurrence of two thirds of the Members present."
    },
    {
      "source": "constitution",
      "sourceLine": 82,
      "text": "Judgment in Cases of Impeachment shall not extend further than to removal from Office, and disqualification to hold and enjoy any Office of honor, Trust or Profit under the United States: but the Party convicted shall nevertheless be liable and subject to Indictment, Trial, Judgment and Punishment, according to Law."
    },
    {
      "source": "constitution",
      "sourceLine": 85,
      "text": "The Times, Places and Manner of holding Elections for Senators and Representatives, shall be prescribed in each State by the Legislature thereof; but the Congress may at any time by Law make or alter such Regulations, except as to the Places of chusing Senators."
    },
    {
      "source": "constitution",
      "sourceLine": 87,
      "text": "The Congress shall assemble at least once in every Year, and such Meeting shall be on the first Monday in December, unless they shall by Law appoint a different Day."
    },
    {
      "source": "constitution",
      "sourceLine": 90,
      "text": "Each House shall be the Judge of the Elections, Returns and Qualifications of its own Members, and a Majority of each shall constitute a Quorum to do Business; but a smaller Number may adjourn from day to day, and may be authorized to compel the Attendance of absent Members, in such Manner, and under such Penalties as each House may provide."
    },
    {
      "source": "constitution",
      "sourceLine": 91,
      "text": "Each House may determine the Rules of its Proceedings, punish its Members for disorderly Behaviour, and, with the Concurrence of two thirds, expel a Member."
    },
    {
      "source": "constitution",
      "sourceLine": 93,
      "text": "Each House shall keep a Journal of its Proceedings, and from time to time publish the same, excepting such Parts as may in their Judgment require Secrecy; and the Yeas and Nays of the Members of either House on any question shall, at the Desire of one fifth of those Present, be entered on the Journal."
    },
    {
      "source": "constitution",
      "sourceLine": 94,
      "text": "Neither House, during the Session of Congress, shall, without the Consent of the other, adjourn for more than three days, nor to any other Place than that in which the two Houses shall be sitting."
    },
    {
      "source": "constitution",
      "sourceLine": 97,
      "text": "The Senators and Representatives shall receive a Compensation for their Services, to be ascertained by Law, and paid out of the Treasury of the United States. They shall in all Cases, except Treason, Felony and Breach of the Peace, be privileged from Arrest during their Attendance at the Session of their respective Houses, and in going to and returning from the same; and for any Speech or Debate in either House, they shall not be questioned in any other Place."
    },
    {
      "source": "constitution",
      "sourceLine": 98,
      "text": "No Senator or Representative shall, during the Time for which he was elected, be appointed to any civil Office under the Authority of the United States, which shall have been created, or the Emoluments whereof shall have been encreased during such time; and no Person holding any Office under the United States, shall be a Member of either House during his Continuance in Office."
    },
    {
      "source": "constitution",
      "sourceLine": 101,
      "text": "All Bills for raising Revenue shall originate in the House of Representatives; but the Senate may propose or concur with Amendments as on other Bills."
    },
    {
      "source": "constitution",
      "sourceLine": 102,
      "text": "Every Bill which shall have passed the House of Representatives and the Senate, shall, before it become a Law, be presented to the President of the United States; If he approve he shall sign it, but if not he shall return it, with his Objections to that House in which it shall have originated, who shall enter the Objections at large on their Journal, and proceed to reconsider it."
    },
    {
      "source": "constitution",
      "sourceLine": 103,
      "text": "If after such Reconsideration two thirds of that House shall agree to pass the Bill, it shall be sent, together with the Objections, to the other House, by which it shall likewise be reconsidered, and if approved by two thirds of that House, it shall become a Law. But in all such Cases the Votes of both Houses shall be determined by yeas and Nays, and the Names of the Persons voting for and against the Bill shall be entered on the Journal of each House respectively."
    },
    {
      "source": "constitution",
      "sourceLine": 104,
      "text": "If any Bill shall not be returned by the President within ten Days (Sundays excepted) after it shall have been presented to him, the Same shall be a Law, in like Manner as if he had signed it, unless the Congress by their Adjournment prevent its Return, in which Case it shall not be a Law."
    },
    {
      "source": "constitution",
      "sourceLine": 105,
      "text": "Every Order, Resolution, or Vote to which the Concurrence of the Senate and House of Representatives may be necessary (except on a question of Adjournment) shall be presented to the President of the United States; and before the Same shall take Effect, shall be approved by him, or being disapproved by him, shall be repassed by two thirds of the Senate and House of Representatives, according to the Rules and Limitations prescribed in the Case of a Bill."
    },
    {
      "source": "constitution",
      "sourceLine": 108,
      "text": "The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and provide for the common Defence and general Welfare of the United States; but all Duties, Imposts and Excises shall be uniform throughout the United States;"
    },
    {
      "source": "constitution",
      "sourceLine": 110,
      "text": "To borrow Money on the credit of the United States;"
    },
    {
      "source": "constitution",
      "sourceLine": 112,
      "text": "To regulate Commerce with foreign Nations, and among the several States, and with the Indian Tribes;"
    },
    {
      "source": "constitution",
      "sourceLine": 113,
      "text": "To establish an uniform Rule of Naturalization, and uniform Laws on the subject of Bankruptcies throughout the United States;"
    },
    {
      "source": "constitution",
      "sourceLine": 115,
      "text": "To coin Money, regulate the Value thereof, and of foreign Coin, and fix the Standard of Weights and Measures;"
    },
    {
      "source": "constitution",
      "sourceLine": 117,
      "text": "To provide for the Punishment of counterfeiting the Securities and current Coin of the United States;"
    },
    {
      "source": "constitution",
      "sourceLine": 119,
      "text": "To establish Post Offices and post Roads;"
    },
    {
      "source": "constitution",
      "sourceLine": 120,
      "text": "To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective Writings and Discoveries;"
    },
    {
      "source": "constitution",
      "sourceLine": 122,
      "text": "To constitute Tribunals inferior to the supreme Court;"
    },
    {
      "source": "constitution",
      "sourceLine": 124,
      "text": "To define and punish Piracies and Felonies committed on the high Seas, and Offences against the Law of Nations;"
    },
    {
      "source": "constitution",
      "sourceLine": 126,
      "text": "To declare War, grant Letters of Marque and Reprisal, and make Rules concerning Captures on Land and Water;"
    },
    {
      "source": "constitution",
      "sourceLine": 127,
      "text": "To raise and support Armies, but no Appropriation of Money to that Use shall be for a longer Term than two Years;"
    },
    {
      "source": "constitution",
      "sourceLine": 129,
      "text": "To provide and maintain a Navy;"
    },
    {
      "source": "constitution",
      "sourceLine": 131,
      "text": "To make Rules for the Government and Regulation of the land and naval Forces;"
    },
    {
      "source": "constitution",
      "sourceLine": 133,
      "text": "To provide for calling forth the Militia to execute the Laws of the Union, suppress Insurrections and repel Invasions;"
    },
    {
      "source": "constitution",
      "sourceLine": 134,
      "text": "To provide for organizing, arming, and disciplining, the Militia, and for governing such Part of them as may be employed in the Service of the United States, reserving to the States respectively, the Appointment of the Officers, and the Authority of training the Militia according to the discipline prescribed by Congress;"
    },
    {
      "source": "constitution",
      "sourceLine": 135,
      "text": "To exercise exclusive Legislation in all Cases whatsoever, over such District (not exceeding ten Miles square) as may, by Cession of particular States, and the Acceptance of Congress, become the Seat of the Government of the United States, and to exercise like Authority over all Places purchased by the Consent of the Legislature of the State in which the Same shall be, for the Erection of Forts, Magazines, Arsenals, dock-Yards, and other needful Buildings;—And"
    },
    {
      "source": "constitution",
      "sourceLine": 136,
      "text": "To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers, and all other Powers vested by this Constitution in the Government of the United States, or in any Department or Officer thereof."
    },
    {
      "source": "constitution",
      "sourceLine": 139,
      "text": "The Migration or Importation of such Persons as any of the States now existing shall think proper to admit, shall not be prohibited by the Congress prior to the Year one thousand eight hundred and eight, but a Tax or duty may be imposed on such Importation, not exceeding ten dollars for each Person."
    },
    {
      "source": "constitution",
      "sourceLine": 141,
      "text": "The Privilege of the Writ of Habeas Corpus shall not be suspended, unless when in Cases of Rebellion or Invasion the public Safety may require it."
    },
    {
      "source": "constitution",
      "sourceLine": 142,
      "text": "No Bill of Attainder or ex post facto Law shall be passed."
    },
    {
      "source": "constitution",
      "sourceLine": 144,
      "text": "No Capitation, or other direct, Tax shall be laid, unless in Proportion to the Census or enumeration herein before directed to be taken."
    },
    {
      "source": "constitution",
      "sourceLine": 146,
      "text": "No Tax or Duty shall be laid on Articles exported from any State."
    },
    {
      "source": "constitution",
      "sourceLine": 148,
      "text": "No Preference shall be given by any Regulation of Commerce or Revenue to the Ports of one State over those of another: nor shall Vessels bound to, or from, one State, be obliged to enter, clear, or pay Duties in another."
    },
    {
      "source": "constitution",
      "sourceLine": 149,
      "text": "No Money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law; and a regular Statement and Account of the Receipts and Expenditures of all public Money shall be published from time to time."
    },
    {
      "source": "constitution",
      "sourceLine": 151,
      "text": "No Title of Nobility shall be granted by the United States: And no Person holding any Office of Profit or Trust under them, shall, without the Consent of the Congress, accept of any present, Emolument, Office, or Title, of any kind whatever, from any King, Prince, or foreign State."
    },
    {
      "source": "constitution",
      "sourceLine": 154,
      "text": "No State shall enter into any Treaty, Alliance, or Confederation; grant Letters of Marque and Reprisal; coin Money; emit Bills of Credit; make any Thing but gold and silver Coin a Tender in Payment of Debts; pass any Bill of Attainder, ex post facto Law, or Law impairing the Obligation of Contracts, or grant any Title of Nobility."
    },
    {
      "source": "constitution",
      "sourceLine": 155,
      "text": "No State shall, without the Consent of the Congress, lay any Imposts or Duties on Imports or Exports, except what may be absolutely necessary for executing it's inspection Laws: and the net Produce of all Duties and Imposts, laid by any State on Imports or Exports, shall be for the Use of the Treasury of the United States; and all such Laws shall be subject to the Revision and Controul of the Congress."
    },
    {
      "source": "constitution",
      "sourceLine": 156,
      "text": "No State shall, without the Consent of Congress, lay any Duty of Tonnage, keep Troops, or Ships of War in time of Peace, enter into any Agreement or Compact with another State, or with a foreign Power, or engage in War, unless actually invaded, or in such imminent Danger as will not admit of delay."
    },
    {
      "source": "constitution",
      "sourceLine": 160,
      "text": "The executive Power shall be vested in a President of the United States of America. He shall hold his Office during the Term of four Years, and, together with the Vice President, chosen for the same Term, be elected, as follows"
    },
    {
      "source": "constitution",
      "sourceLine": 161,
      "text": "Each State shall appoint, in such Manner as the Legislature thereof may direct, a Number of Electors, equal to the whole Number of Senators and Representatives to which the State may be entitled in the Congress: but no Senator or Representative, or Person holding an Office of Trust or Profit under the United States, shall be appointed an Elector."
    },
    {
      "source": "constitution",
      "sourceLine": 162,
      "text": "The Electors shall meet in their respective States, and vote by Ballot for two Persons, of whom one at least shall not be an Inhabitant of the same State with themselves. And they shall make a List of all the Persons voted for, and of the Number of Votes for each; which List they shall sign and certify, and transmit sealed to the Seat of the Government of the United States, directed to the President of the Senate."
    },
    {
      "source": "constitution",
      "sourceLine": 163,
      "text": "The President of the Senate shall, in the Presence of the Senate and House of Representatives, open all the Certificates, and the Votes shall then be counted."
    },
    {
      "source": "constitution",
      "sourceLine": 164,
      "text": "The Person having the greatest Number of Votes shall be the President, if such Number be a Majority of the whole Number of Electors appointed; and if there be more than one who have such Majority, and have an equal Number of Votes, then the House of Representatives shall immediately chuse by Ballot one of them for President; and if no Person have a Majority, then from the five highest on the List the said House shall in like Manner chuse the President."
    },
    {
      "source": "constitution",
      "sourceLine": 165,
      "text": "But in chusing the President, the Votes shall be taken by States, the Representation from each State having one Vote; A quorum for this Purpose shall consist of a Member or Members from two thirds of the States, and a Majority of all the States shall be necessary to a Choice. In every Case, after the Choice of the President, the Person having the greatest Number of Votes of the Electors shall be the Vice President."
    },
    {
      "source": "constitution",
      "sourceLine": 166,
      "text": "But if there should remain two or more who have equal Votes, the Senate shall chuse from them by Ballot the Vice President."
    },
    {
      "source": "constitution",
      "sourceLine": 167,
      "text": "The Congress may determine the Time of chusing the Electors, and the Day on which they shall give their Votes; which Day shall be the same throughout the United States."
    },
    {
      "source": "constitution",
      "sourceLine": 168,
      "text": "No Person except a natural born Citizen, or a Citizen of the United States, at the time of the Adoption of this Constitution, shall be eligible to the Office of President; neither shall any Person be eligible to that Office who shall not have attained to the Age of thirty five Years, and been fourteen Years a Resident within the United States."
    },
    {
      "source": "constitution",
      "sourceLine": 169,
      "text": "In Case of the Removal of the President from Office, or of his Death, Resignation, or Inability to discharge the Powers and Duties of the said Office, the Same shall devolve on the Vice President, and the Congress may by Law provide for the Case of Removal, Death, Resignation or Inability, both of the President and Vice President, declaring what Officer shall then act as President, and such Officer shall act accordingly, until the Disability be removed, or a President shall be elected."
    },
    {
      "source": "constitution",
      "sourceLine": 170,
      "text": "The President shall, at stated Times, receive for his Services, a Compensation, which shall neither be encreased nor diminished during the Period for which he shall have been elected, and he shall not receive within that Period any other Emolument from the United States, or any of them."
    },
    {
      "source": "constitution",
      "sourceLine": 171,
      "text": "Before he enter on the Execution of his Office, he shall take the following Oath or Affirmation:—\"I do solemnly swear (or affirm) that I will faithfully execute the Office of President of the United States, and will to the best of my Ability, preserve, protect and defend the Constitution of the United States.\""
    },
    {
      "source": "constitution",
      "sourceLine": 174,
      "text": "The President shall be Commander in Chief of the Army and Navy of the United States, and of the Militia of the several States, when called into the actual Service of the United States; he may require the Opinion, in writing, of the principal Officer in each of the executive Departments, upon any Subject relating to the Duties of their respective Offices, and he shall have Power to grant Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment."
    },
    {
      "source": "constitution",
      "sourceLine": 175,
      "text": "He shall have Power, by and with the Advice and Consent of the Senate, to make Treaties, provided two thirds of the Senators present concur; and he shall nominate, and by and with the Advice and Consent of the Senate, shall appoint Ambassadors, other public Ministers and Consuls, Judges of the supreme Court, and all other Officers of the United States, whose Appointments are not herein otherwise provided for, and which shall be established by Law: but the Congress may by Law vest the Appointment of such inferior Officers, as they think proper, in the President alone, in the Courts of Law, or in the Heads of Departments."
    },
    {
      "source": "constitution",
      "sourceLine": 176,
      "text": "The President shall have Power to fill up all Vacancies that may happen during the Recess of the Senate, by granting Commissions which shall expire at the End of their next Session."
    },
    {
      "source": "constitution",
      "sourceLine": 178,
      "text": "He shall from time to time give to the Congress Information of the State of the Union, and recommend to their Consideration such Measures as he shall judge necessary and expedient; he may, on extraordinary Occasions, convene both Houses, or either of them, and in Case of Disagreement between them, with Respect to the Time of Adjournment, he may adjourn them to such Time as he shall think proper; he shall receive Ambassadors and other public Ministers; he shall take Care that the Laws be faithfully executed, and shall Commission all the Officers of the United States."
    },
    {
      "source": "constitution",
      "sourceLine": 181,
      "text": "The President, Vice President and all civil Officers of the United States, shall be removed from Office on Impeachment for, and Conviction of, Treason, Bribery, or other high Crimes and Misdemeanors."
    },
    {
      "source": "constitution",
      "sourceLine": 186,
      "text": "The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish. The Judges, both of the supreme and inferior Courts, shall hold their Offices during good Behaviour, and shall, at stated Times, receive for their Services, a Compensation, which shall not be diminished during their Continuance in Office."
    },
    {
      "source": "constitution",
      "sourceLine": 188,
      "text": "The judicial Power shall extend to all Cases, in Law and Equity, arising under this Constitution, the Laws of the United States, and Treaties made, or which shall be made, under their Authority;—to all Cases affecting Ambassadors, other public Ministers and Consuls;—to all Cases of admiralty and maritime Jurisdiction;—to Controversies to which the United States shall be a Party;—to Controversies between two or more States;—between a State and Citizens of another State,—between Citizens of different States,—between Citizens of the same State claiming Lands under Grants of different States, and between a State, or the Citizens thereof, and foreign States, Citizens or Subjects."
    },
    {
      "source": "constitution",
      "sourceLine": 189,
      "text": "In all Cases affecting Ambassadors, other public Ministers and Consuls, and those in which a State shall be Party, the supreme Court shall have original Jurisdiction. In all the other Cases before mentioned, the supreme Court shall have appellate Jurisdiction, both as to Law and Fact, with such Exceptions, and under such Regulations as the Congress shall make."
    },
    {
      "source": "constitution",
      "sourceLine": 190,
      "text": "The Trial of all Crimes, except in Cases of Impeachment, shall be by Jury; and such Trial shall be held in the State where the said Crimes shall have been committed; but when not committed within any State, the Trial shall be at such Place or Places as the Congress may by Law have directed."
    },
    {
      "source": "constitution",
      "sourceLine": 193,
      "text": "Treason against the United States, shall consist only in levying War against them, or in adhering to their Enemies, giving them Aid and Comfort. No Person shall be convicted of Treason unless on the Testimony of two Witnesses to the same overt Act, or on Confession in open Court."
    },
    {
      "source": "constitution",
      "sourceLine": 195,
      "text": "The Congress shall have Power to declare the Punishment of Treason, but no Attainder of Treason shall work Corruption of Blood, or Forfeiture except during the Life of the Person attainted."
    },
    {
      "source": "constitution",
      "sourceLine": 200,
      "text": "Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings of every other State. And the Congress may by general Laws prescribe the Manner in which such Acts, Records and Proceedings shall be proved, and the Effect thereof."
    },
    {
      "source": "constitution",
      "sourceLine": 203,
      "text": "The Citizens of each State shall be entitled to all Privileges and Immunities of Citizens in the several States."
    },
    {
      "source": "constitution",
      "sourceLine": 205,
      "text": "A Person charged in any State with Treason, Felony, or other Crime, who shall flee from Justice, and be found in another State, shall on Demand of the executive Authority of the State from which he fled, be delivered up, to be removed to the State having Jurisdiction of the Crime."
    },
    {
      "source": "constitution",
      "sourceLine": 206,
      "text": "No Person held to Service or Labour in one State, under the Laws thereof, escaping into another, shall, in Consequence of any Law or Regulation therein, be discharged from such Service or Labour, but shall be delivered up on Claim of the Party to whom such Service or Labour may be due."
    },
    {
      "source": "constitution",
      "sourceLine": 209,
      "text": "New States may be admitted by the Congress into this Union; but no new State shall be formed or erected within the Jurisdiction of any other State; nor any State be formed by the Junction of two or more States, or Parts of States, without the Consent of the Legislatures of the States concerned as well as of the Congress."
    },
    {
      "source": "constitution",
      "sourceLine": 210,
      "text": "The Congress shall have Power to dispose of and make all needful Rules and Regulations respecting the Territory or other Property belonging to the United States; and nothing in this Constitution shall be so construed as to Prejudice any Claims of the United States, or of any particular State."
    },
    {
      "source": "constitution",
      "sourceLine": 213,
      "text": "The United States shall guarantee to every State in this Union a Republican Form of Government, and shall protect each of them against Invasion; and on Application of the Legislature, or of the Executive (when the Legislature cannot be convened) against domestic Violence."
    },
    {
      "source": "constitution",
      "sourceLine": 215,
      "text": "The Congress, whenever two thirds of both Houses shall deem it necessary, shall propose Amendments to this Constitution, or, on the Application of the Legislatures of two thirds of the several States, shall call a Convention for proposing Amendments, which, in either Case, shall be valid to all Intents and Purposes, as Part of this Constitution, when ratified by the Legislatures of three fourths of the several States, or by Conventions in three fourths thereof, as the one or the other Mode of Ratification may be proposed by the Congress; Provided that no Amendment which may be made prior to the Year One thousand eight hundred and eight shall in any Manner affect the first and fourth Clauses in the Ninth Section of the first Article; and that no State, without its Consent, shall be deprived of its equal Suffrage in the Senate."
    },
    {
      "source": "constitution",
      "sourceLine": 218,
      "text": "All Debts contracted and Engagements entered into, before the Adoption of this Constitution, shall be as valid against the United States under this Constitution, as under the Confederation."
    },
    {
      "source": "constitution",
      "sourceLine": 219,
      "text": "This Constitution, and the Laws of the United States which shall be made in Pursuance thereof; and all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land; and the Judges in every State shall be bound thereby, any Thing in the Constitution or Laws of any State to the Contrary notwithstanding."
    },
    {
      "source": "constitution",
      "sourceLine": 220,
      "text": "The Senators and Representatives before mentioned, and the Members of the several State Legislatures, and all executive and judicial Officers, both of the United States and of the several States, shall be bound by Oath or Affirmation, to support this Constitution; but no religious Test shall ever be required as a Qualification to any Office or public Trust under the United States."
    },
    {
      "source": "constitution",
      "sourceLine": 223,
      "text": "The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same."
    },
    {
      "source": "bill-of-rights",
      "sourceLine": 95,
      "text": "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances."
    },
    {
      "source": "bill-of-rights",
      "sourceLine": 99,
      "text": "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed."
    },
    {
      "source": "bill-of-rights",
      "sourceLine": 102,
      "text": "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law."
    },
    {
      "source": "bill-of-rights",
      "sourceLine": 105,
      "text": "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized."
    },
    {
      "source": "bill-of-rights",
      "sourceLine": 107,
      "text": "No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation."
    },
    {
      "source": "bill-of-rights",
      "sourceLine": 110,
      "text": "In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed, which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence."
    },
    {
      "source": "bill-of-rights",
      "sourceLine": 113,
      "text": "In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law."
    },
    {
      "source": "bill-of-rights",
      "sourceLine": 117,
      "text": "Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted."
    },
    {
      "source": "bill-of-rights",
      "sourceLine": 120,
      "text": "The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people."
    },
    {
      "source": "bill-of-rights",
      "sourceLine": 123,
      "text": "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people."
    }
  ]
};
}());
