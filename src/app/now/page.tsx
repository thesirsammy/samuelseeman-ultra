import Now from "@/components/Now";

export default function Page() {
  return (
    <div className="flex justify-center font-body">
      <div className="flex flex-col md:mt-32 mt-8 md:mb-32 mb-8 md:max-w-[750px] mx-4 md:text-[18px] text-[16px] gap-8">
        <div className="font-display text-4xl font-bold text-accent">Now <span className="font-body font-normal text-lg text-neutral-400 ml-4">What&apos;s happening?</span></div>
        
        <Now 
          date="6/02/25"
          location="Jarabacoa, Dominican Republic"
          text={
            <>
              I&apos;m in the Dominican Republic this summer as an intern for Mission of Hope, a Caribbean mission trip program. Over the course 
              of two months I get to serve with 9 teams, spending a week with each in service and ministry to different Dominican communities, connecting
              through local churchs and native translators. Through games, personal interactions, home repairs, and more, we&apos;re seeing hundreds of lives changed. 
              With the internet quality we have here it&apos;s putting a hold on programming, but doing this kind of hands-on service is a nice break
              from the usual, and feels really refreshing. 
            </>
          }
        />
        
        <Now 
          date="9/30/24"
          location="Tuscaloosa, AL"
          text={
            <>
              I just had the honor of being selected as an Arc Ambassador 
              for <a href="https://arc.net/blog/school-of-browser" target="_blank" className="text-accent hover:text-accent-hover hover:underline underline-offset-4 duration-200">The Browser Company</a>, 
              which is an incredible opportunity to share the Arc Browser and how it has changed the way I use my computer. 
              While I do intend on converting lots of students to this revolutionary tool, I also want to use the 
              Arc brand to open up opportunities for other students to learn to code and develop computer etiquette. 
              I&apos;m also learning about social media management on a larger scale than just having a personal account, 
              including graphic design and outreach.
            </>
          }
        />

        <Now 
          date="9/21/24"
          location="Tuscaloosa, AL"
          text={
            <>
              I joined a local volunteer program called <a href="https://yfc.net" target="_blank" className="text-accent hover:text-accent-hover hover:underline underline-offset-4 duration-200">Youth for Christ</a>, an outreach ministry focused on reaching 
              middle and high school students in the Tuscaloosa school system. As a team leader, I get to help organize 
              different events for the kids, usually involving a lot of pizza and fun. It&apos;s an amazing chance to give 
              back to my community and I love every minute of it.
            </>
          }
        />
      </div>
    </div>

  )
}