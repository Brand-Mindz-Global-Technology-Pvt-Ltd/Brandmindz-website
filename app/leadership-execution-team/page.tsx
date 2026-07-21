import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LeadershipExecutionTeam from "@/components/leadership-execution-team/LeadershipExecutionTeam";
import "@/style/industries/industries.css";

export { metadata } from "@/components/leadership-execution-team/LeadershipExecutionTeam";

export default function LeadershipExecutionTeamPage() {
  return (
    <>
      <Header />
      <LeadershipExecutionTeam />
      <Footer />
    </>
  );
}


