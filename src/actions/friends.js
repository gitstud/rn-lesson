import { Contacts, Permissions } from 'expo';
export const GET_CONTACTS = 'GET_CONTACTS';

export const getContacts = () => async (dispatch) => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
console.log(status);
    if (status === 'granted') {
        try {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.PhoneNumbers],
            });

            if (data.length > 0) {
              const contact = data[0];
              // console.log(contact);

              dispatch({
                  type: GET_CONTACTS,
                  payload: data
              });
            } else {
                  console.log('No contacts found!');
            }
        } catch (e) {
            console.log('contact err');
        }
    } else {
        console.log('Please ensure contacts permissions are enabled.');
    }
};
