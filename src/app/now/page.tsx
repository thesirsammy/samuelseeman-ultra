import Now from "@/components/Now";

export default function Page() {
  return (
    <div className="flex justify-center font-body">
      <div className="flex flex-col md:mt-32 mt-8 md:max-w-[650px] mx-4 md:text-[18px] text-[16px] gap-8">
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
              I'm also learning about social media management on a larger scale than just having a personal account, 
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
              different events for the kids, usually involving a lot of pizza and fun. It's an amazing chance to give 
              back to my community and I love every minute of it.
            </>
          }
        />
      </div>
    </div>
  )
}