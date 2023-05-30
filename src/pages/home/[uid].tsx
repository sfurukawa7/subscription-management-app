import EditSubscModal from "@organisms/editSubscModal";
import PaymentSchedule from "@organisms/paymentSchedule";
import SubscriptionWrap from "@organisms/subscription";

import { useHome } from "./hooks";

import Layout from "src/components/templates/layout";
import Modal from "src/components/templates/modal";

const Home = () => {
  const { t, data, isModalOpen, modalSubscId, handleOpen, handleClose, handleDelete, handleEdit } =
    useHome();

  return (
    <Layout
      showNav={true}
      title={t("HOME.HEADER")}>
      <main>
        <div>
          <PaymentSchedule
            subscriptionList={data}
            handleOpen={handleOpen}
          />
          <SubscriptionWrap
            subscriptionList={data}
            handleOpen={handleOpen}
          />
          <Modal isOpen={isModalOpen}>
            <EditSubscModal
              handleClose={handleClose}
              handleDelete={handleDelete}
              modalSubscId={modalSubscId}
              handleEdit={handleEdit}
            />
          </Modal>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
